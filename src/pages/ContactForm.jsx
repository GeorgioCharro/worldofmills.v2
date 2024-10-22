import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { t } from 'i18next';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    country: '',
    message: '',
    options: {
      thymeAndSpices: false,
      nuts: false,
      animalFeed: false,
      chocolateMachines: false,
      dairy: false,
      filteringMachines: false,
      others: false,
    },
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        options: { ...formData.options, [name]: checked },
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const serviceID = 'your_service_id';
    const templateID = 'your_template_id';
    const userID = 'your_user_id';

    emailjs.send(serviceID, templateID, formData, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
      })
      .catch((err) => {
        console.error('FAILED...', err);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <h2 className="text-center text-red-600 font-bold mt-4">{t('Please Fill The Following Form')}</h2>
      <div>
        <input
          type="text"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="company"
          placeholder="company"
          value={formData.company}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="phone"
          placeholder="phone"
          value={formData.phone}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <input
          type="text"
          name="country"
          placeholder="country"
          value={formData.country}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <textarea
          name="message"
          placeholder="message"
          value={formData.message}
          onChange={handleChange}
          className="block w-full p-2 border border-gray-300 rounded-md"
          required
        />
      </div>
      <div>
        <p className="font-semibold">{t('What type of machine or service')}</p>
        <div className="space-y-2">
          <label className="block">
            <input
              type="checkbox"
              name="thymeAndSpices"
              checked={formData.options.thymeAndSpices}
              onChange={handleChange}
              className="mr-2"
            />
            {t('Thyme And Spices')}
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="nuts"
              checked={formData.options.nuts}
              onChange={handleChange}
              className="mr-2"
            />
            {t('Nuts')}
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="animalFeed"
              checked={formData.options.animalFeed}
              onChange={handleChange}
              className="mr-2"
            />
            {t('Animal Feed Production Lines')}
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="chocolateMachines"
              checked={formData.options.chocolateMachines}
              onChange={handleChange}
              className="mr-2"
            />
            {t('Chocolate Machines')}
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="dairy"
              checked={formData.options.dairy}
              onChange={handleChange}
              className="mr-2"
            />
            {t('Dairy')}
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="filteringMachines"
              checked={formData.options.filteringMachines}
              onChange={handleChange}
              className="mr-2"
            />
            {t('Filtering Machines')}
          </label>
          <label className="block">
            <input
              type="checkbox"
              name="others"
              checked={formData.options.others}
              onChange={handleChange}
              className="mr-2"
            />
            {t('Others')}
          </label>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="px-6 py-3 #cfac6e text-black font-semibold rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-75"
        >
          {t('Submit')}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
