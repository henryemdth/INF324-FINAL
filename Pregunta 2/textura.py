import cv2
import numpy as np
colorsB=colorsG=colorsR=colors=0

def rgb_to_hsv(r, g, b):
    r, g, b = r/255.0, g/255.0, b/255.0
    mx = max(r, g, b)
    mn = min(r, g, b)
    df = mx-mn
    if mx == mn:
        h = 0
    elif mx == r:
        h = (60 * ((g-b)/df) + 360) % 360
    elif mx == g:
        h = (60 * ((b-r)/df) + 120) % 360
    elif mx == b:
        h = (60 * ((r-g)/df) + 240) % 360
    if mx == 0:
        s = 0
    else:
        s = (df/mx)*100
    v = mx*100
    return h, s, v
def mouseRGB(event,x,y,flags,param):
    if event == cv2.EVENT_LBUTTONDOWN: #checks mouse left button down condition
        global colorsB,colorsG,colorsR,colors
        colorsB = cap[y,x,0]
        colorsG = cap[y,x,1]
        colorsR = cap[y,x,2]
        colors = cap[y,x]
        print("Red: ",colorsR)
        print("Green: ",colorsG)
        print("Blue: ",colorsB)
        print("BRG Format: ",colors)
        print("Coordinates of pixel: X: ",x,"Y: ",y)

while(1):
    cv2.namedWindow('mouseRGB')
    cv2.namedWindow('mouse')
    cv2.setMouseCallback('mouse',mouseRGB)
    cap = cv2.imread('ropa.jpg')
    # redHSV = cv2.cvtColor(red, cv2.COLOR_BGR2HSV)
    # print(rgb_to_hsv(255, 255, 255))
    # print(rgb_to_hsv(0, 215, 0))
    lower = np.array(colors)
    h,s,v= rgb_to_hsv(colorsR, colorsG, colorsB)
    azulBajo = np.array([(h/2)-10, 100,20],np.uint8)

    azulAlto = np.array([(h/2)+10, 255, 255], np.uint8)
    print(h/2)
    #azulAlto = np.array(rgb_to_hsv(colorsR, colorsG, colorsB), np.uint8)
    frameHSV = cv2.cvtColor(cap, cv2.COLOR_BGR2HSV)
    mask = cv2.inRange(frameHSV, azulBajo, azulAlto)
    cv2.imshow('mouseRGB', mask)
    cv2.imshow('mouse', cap)
    if cv2.waitKey(20) & 0xFF == 27:
        break
print("\nPulsa cualquier tecla para cerrar las ventanas\n")
cv2.waitKey(0)
cv2.destroyAllWindows()
