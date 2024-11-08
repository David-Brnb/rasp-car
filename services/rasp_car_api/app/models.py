# Definition of ORM models for SQLAlchemy
# main/models.py
from sqlalchemy import Column, Integer, Double, Boolean, DateTime
from sqlalchemy.ext.declarative import declarative_base
from datetime import datetime, timezone

def get_utc_now():
    """Returns the current UTC time as a timezone-aware datetime object."""
    return datetime.now(timezone.utc)

Base = declarative_base()

class Photoresistor(Base):
    __tablename__ = "photoresistor"
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    analog_voltage = Column(Integer, nullable=False)
    voltage = Column(Double, nullable=False)
    timestamp = Column(DateTime, default=get_utc_now)
    
class Accelerometer(Base):
    __tablename__ = "accelerometer"
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    x_axis = Column(Double, nullable=False)
    y_axis = Column(Double, nullable=False)
    z_axis = Column(Double, nullable=False)
    free_fall = Column(Boolean, nullable=False)
    timestamp = Column(DateTime, default=get_utc_now)

class Distance(Base):
    __tablename__ = "distance"
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    distance = Column(Double, nullable=False)
    timestamp = Column(DateTime, default=get_utc_now)

class Pressure(Base):
    __tablename__ = "pressure"
    
    id = Column(Integer, primary_key=True, autoincrement=True)
    temperature = Column(Double, nullable=False)
    pressure = Column(Double, nullable=False)
    altitude = Column(Double, nullable=False)
    timestamp = Column(DateTime, default=get_utc_now)
