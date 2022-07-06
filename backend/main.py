from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

song_list = [
    {"artist": "PARTYNEXTDOOR",
     "title": "Savage Anthem",
     "Album": "Party Mobile",
     "number_of_videos": 679,
     "tiktoklink": "https://vm.tiktok.com/ZMN6N222X/"
     },
    {"artist": "Motte",
     "title": "Don`t run away",
     "Album": "Don`t run away",
     "number_of_videos": 1275,
     "tiktoklink": "https://vm.tiktok.com/ZMN6NJy4o/"
     }
]

origins = [
    "http://localhost",
    "http://127.0.0.1:3000/",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/songs")
async def say_hello():
    return song_list