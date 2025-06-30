# Use official Python image
FROM python:3.12-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# Set work directory
WORKDIR /app

# Install system dependencies
RUN apt-get update \
  && apt-get install -y default-libmysqlclient-dev gcc \
  && pip install --upgrade pip

# Copy requirements and install
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy project
COPY . .

# Expose port (Django default)
EXPOSE 3000

# Start the app
CMD ["python", "manage.py", "runserver", "0.0.0.0:3000"]
