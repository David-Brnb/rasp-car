# Implementation of route to send API
# main/routers/pressure.py
from fastapi import APIRouter, Depends, HTTPException
from app import schemas

router = APIRouter()

# Edit Dict to modify configs
configuration = {
    # motor : {},
    # sensor : {},
    "mqtt": {
        "broker": "broker.hivemq.com",
        "port" :  1883,
        "topic": "equipo3",
    },
    "sql": "mysql+pymysql://user:123eq3rtu@10.48.229.221:3306/Sensors",
}

@router.get("/config/", response_model=schemas.RaspConfig)
def read_distances():
    return configuration