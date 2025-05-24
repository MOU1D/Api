from PIL import Image, ImageDraw, ImageFont
import os

def create_image(filename, text, size=(400, 400), color=(200, 200, 200)):
    # Créer une nouvelle image avec fond gris
    image = Image.new('RGB', size, color)
    draw = ImageDraw.Draw(image)
    
    # Dessiner un rectangle au centre
    rect_size = (100, 100)
    rect_pos = ((size[0] - rect_size[0]) // 2, (size[1] - rect_size[1]) // 2)
    draw.rectangle([rect_pos[0], rect_pos[1], rect_pos[0] + rect_size[0], rect_pos[1] + rect_size[1]], fill=(150, 150, 150))
    
    # Ajouter le texte
    draw.text((size[0]//2, size[1]//2), text, fill=(0, 0, 0), anchor="mm")
    
    # Sauvegarder l'image
    image.save(filename)

# Créer le dossier s'il n'existe pas
os.makedirs("uploads/products", exist_ok=True)

# Générer les images
images = [
    ("placeholder.jpg", "No Image"),
    ("sneakers-1.jpg", "Sneakers 1"),
    ("tshirt-1.jpg", "T-shirt 1"),
    ("running-1.jpg", "Running 1"),
    ("sneakers-2.jpg", "Sneakers 2"),
    ("sneakers-3.jpg", "Sneakers 3"),
    ("sneakers-4.jpg", "Sneakers 4"),
]

for filename, text in images:
    create_image(f"uploads/products/{filename}", text) 