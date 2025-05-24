import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const protectedRoutes = ['/profile', '/cart', '/checkout']
const authRoutes = ['/login', '/register']

export function middleware(request: NextRequest) {
    const authData = request.cookies.get('auth-storage')
    const isAuthenticated = authData && JSON.parse(authData.value).state.user
    const path = request.nextUrl.pathname

    // Rediriger vers la page de connexion si l'utilisateur n'est pas authentifié
    // et essaie d'accéder à une route protégée
    if (!isAuthenticated && protectedRoutes.some(route => path.startsWith(route))) {
        const url = new URL('/login', request.url)
        url.searchParams.set('redirect', path)
        return NextResponse.redirect(url)
    }

    // Rediriger vers le profil si l'utilisateur est authentifié
    // et essaie d'accéder aux pages de connexion/inscription
    if (isAuthenticated && authRoutes.includes(path)) {
        return NextResponse.redirect(new URL('/profile', request.url))
    }

    return NextResponse.next()
}

export const config = {
    matcher: [
        '/profile/:path*',
        '/cart',
        '/checkout',
        '/login',
        '/register',
    ],
} 