import React, { useState, useEffect } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();   
    const message = `¡Hola ${formData.name}! Formulario enviado con éxito.`;
    alert(message);
  };

  return (
    <div className="container mx-auto px-4 py-8 mt-9">
      <h1 className="text-3xl font-bold mb-8">¡Contácto!</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-lg font-semibold mb-2">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-400 rounded px-4 py-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-lg font-semibold mb-2">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-400 rounded px-4 py-2 w-full"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-lg font-semibold mb-2">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            className="border border-gray-400 rounded px-4 py-2 w-full"
            required
          ></textarea>
        </div>

        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Enviar
        </button>
      </form>

    </div>
  );
};

export default Contact;
