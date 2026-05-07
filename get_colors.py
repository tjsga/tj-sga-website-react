try:
    from PIL import Image
    from collections import Counter
    img = Image.open('public/images/banner.png').convert('RGB')
    w, h = img.size
    pixels = list(img.getdata())
    
    # filter out white/transparent/black
    valid_pixels = [p for p in pixels if p[0] < 240 and p[1] < 240 and p[2] < 240 and sum(p) > 50]
    c = Counter(valid_pixels)
    for p, count in c.most_common(10):
        print(f"#{p[0]:02x}{p[1]:02x}{p[2]:02x}", count)
except Exception as e:
<<<<<<< HEAD
    print(e)
=======
    print(e)
>>>>>>> 0368ad621a1a673c3a048e876ccf00c6ddc8d882
