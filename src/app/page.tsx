"use client";

import { useState } from "react";


export default function Home() {

  const prompt = "Genera una actividad para que esta niña pueda aprender correctamente. Perfil de niño: Camila Edad: 9 años Materia: Ciencias Naturales Tema: El ciclo del agua Estilo dominante de aprendizaje: Kinestésico Camila aprende mejor cuando puede interactuar físicamente con el contenido, tocar, construir y moverse mientras asimila nueva información."

  const [output, setOutput] = useState('This is a nextjs project.');

  // Define an asynchronous function to send POST request to our api
  const generateText = async () => {
    try {
      // use the fetch method to send an http request to /api/generate endpoint
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ body: prompt })
      });

      // Waits for the response to be converted to JSON format and stores it in the data variable
      const data = await response.json();

      //  If successful, updates the output state with the output field from the response data
      if (response.ok) {
        setOutput(data.output)
      } else {
        setOutput(data.error)
      }

      // Catches any errors that occur during the fetch request
    } catch (error) {
      console.error('Error:', error)
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-serif text-2xl lg:flex">
        <p onClick={generateText}>{output}</p>
      </div>
    </main>
  );
}