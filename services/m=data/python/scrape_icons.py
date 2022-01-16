import wget
import pathlib
#url = "https://wegame.gtimg.com/g.26-r.c2d3c/helper/lol/assis/images/resources/champions/"
#url = "https://wegame.gtimg.com/g.26-r.c2d3c/helper/lol/assis/images/resources/items/"
#url = "https://wegame.gtimg.com/g.26-r.c2d3c/helper/lol/assis/images/resources/summonability/"
url = "https://www.osrsbox.com/osrsbox-db/items-icons/"

path = str(pathlib.Path(__file__).parent.absolute())+"/items-icons/"

#i = 515
i = 100
#z = 0
while (i < 20000):
    print(i)
    try:
        wget.download(url+str(i)+'.png', path+str(i)+'.png')
    except:
        print("error")
   
    i += 1