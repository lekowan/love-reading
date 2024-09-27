import re
from mechanize import Browser
from bs4 import BeautifulSoup
import time
import requests

# import external file
import raw

# import raw object
obj = raw.obj

# word = "pimipahtâ"

def extract_audio(arg, number):

    br = Browser()
    br.set_handle_robots(False)
    
    #query = "https://hsk.academy/static/audio/mp3/characters/" + arg + ".mp3"
    #print(query)

    #r = requests.get(query)
    #soup = BeautifulSoup(r.content, 'html.parser')

    #audio_array = soup.find_all('source')
    #print('audio array', audio_array)
    #audios = ['https://hsk.academy/static/audio/mp3/characters/' + audio['src'] for audio in audio_array]

    # print(audios)

    #if(audios):
    #print(audios[0])
    doc = requests.get("https://hsk.academy/static/audio/mp3/characters/" + arg + ".mp3" )
    filename = str(number) + '.mp3'
    with open(filename, 'wb') as f:
        f.write(doc.content)

# Set timer
starttime = time.time()
i = 0

#for count, value in enumerate(obj):
 #   extract_audio(value, count+1)
    
while i <= len(obj):
    time.sleep(1 - ((time.time() - starttime) % 1))
    extract_audio(obj[i], i+1)
    print(obj[i])
    i = i + 1




