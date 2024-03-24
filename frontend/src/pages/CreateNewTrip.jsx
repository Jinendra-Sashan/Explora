// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { InboxOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import NavigationLinksButton from "../components/NavigationLinksButton/NavigationLinksButton";
const { Dragger } = Upload;
import { Flex, Input, Button } from 'antd';
const { TextArea } = Input;

// Function to handle the change in the text area
const onChange = (e) => {
  console.log('Changing content:', e.target.value);
};

function CreateNewTrip() {
  const [tripTitle, setTripTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const navigate = useNavigate();

  // Function to handle the change in the trip title input
  const handleTripTitleChange = (event) => {
    setTripTitle(event.target.value);
  };

  // Function to handle the change in the short description input
  const handleShortDescriptionChange = (event) => {
    setShortDescription(event.target.value);
  };

  // Function to handle the change in the city input
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  // Function to handle the change in the country input
  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const [selectedDate, setSelectedDate] = useState(new Date());

  // Function to handle the change in the selected date
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  
  // Props for the Upload component
  const props = {
    name: 'file',
    multiple: true,
    action: 'https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188',
    onChange(info) {
      const { status } = info.file;
      if (status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (status === 'done') {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log('Dropped files', e.dataTransfer.files);
    },
  };

  const [items, setItems] = useState(['']); // State to hold the list of items
  
  // Function to handle adding a new item
  const handleAddItem = () => {
    setItems([...items, '']);
  };
  
  // Function to handle updating an item
  const handleItemChange = (index, value) => {
    const updatedItems = [...items];
    updatedItems[index] = value;
    setItems(updatedItems);
  };

  // Function to handle deleting an item
  const handleDeleteItem = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  return (
    <div className="fixed left-0 top-0 z-0 h-screen w-screen">
      {/* Div for the background image with blur effect */}
      <div
        className="absolute left-0 top-0 w-full h-full bg-[url('https://cdn.dribbble.com/userupload/12608757/file/original-7c0e168619a01690aeee929e3f60cd13.jpg?resize=2400x1803')] bg-cover bg-center overflow-hidden filter blur-lg"
        style={{ zIndex: -1 }}
      ></div>
      
      {/* Adding the navigation links */}
      <NavigationLinksButton />

      <div className="pt-20 overflow-y-auto h-screen">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md px-8 py-6 w-full md:w-1/2 mb-8">
            {/* White rectangle with rounded edges */}
            <h1 className="text-xl font-bold mb-2">Basic Details</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Grid for left/right layout */}
              <div className="md:col-span-1"></div> {/* Placeholder for left side */}
              <div className="md:col-span-1 flex flex-col">
                <div className="flex flex-col mb-4">
                  <input
                    type="text"
                    id="tripTitle"
                    name="tripTitle"
                    placeholder=" Trip Title"
                    className="shadow-sm p-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full"
                    value={tripTitle}
                    onChange={handleTripTitleChange}
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <textarea
                    id="shortDescription"
                    name="shortDescription"
                    className="shadow-sm p-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full h-24"
                    placeholder="Short Description"
                    value={shortDescription}
                    onChange={handleShortDescriptionChange}
                  />
                </div>
              </div>
            </div>
          </div>
  
          <div className="bg-white rounded-lg shadow-md px-8 py-6 w-full md:w-1/2 mt-8">
            {/* White rectangle with rounded edges */}
            <h1 className="text-xl font-bold mb-2">Destination</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Grid for left/right layout */}
              <div className="md:col-span-1"></div> {/* Placeholder for left side */}
              <div className="md:col-span-1 flex flex-col">
                <div className="flex flex-col mb-4">
                  <input
                    type="text"
                    id="city"
                    name="city"
                    placeholder=" City"
                    className="shadow-sm p-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full"
                    value={city}
                    onChange={handleCityChange}
                  />
                </div>
                <div className="flex flex-col mb-4">
                  <textarea
                    id="country"
                    name="country"
                    className="shadow-sm p-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 w-full h-24"
                    placeholder="Country"
                    value={country}
                    onChange={handleCountryChange}
                  />
                </div>
              </div>
            </div>
          </div>
  
          <div className="bg-white rounded-lg shadow-md px-8 py-6 w-full md:w-1/2 mt-8">
            {/* White rectangle with rounded edges */}
            <h1 className="text-xl font-bold mb-2">Date</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Grid for left/right layout */}
              <div className="md:col-span-1"></div> {/* Placeholder for left side */}
    
              <div className="md:col-span-1 flex flex-col mb-4">
                <input
                  type="date"
                  className="shadow-sm p-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  value={selectedDate.toISOString().substring(0, 10)}
                  onChange={(event) => handleDateChange(new Date(event.target.value))}
                />
              </div>
            </div>
          </div>
  
          <div className="bg-white rounded-lg shadow-md px-8 py-6 w-full md:w-1/2 mt-8 mb-20 min-h-[500px]">
            {/* White rectangle with rounded edges */}
            <h1 className="text-xl font-bold mb-2">Picture</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Grid for left/right layout */}
              <div className="md:col-span-1"></div> {/* Placeholder for left side */}
              <div className="md:col-span-1 flex flex-col">
                <Dragger {...props}>
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">Click or drag file to this area to upload</p>
                  <p className="ant-upload-hint">
                    Support for a single or bulk upload. Strictly prohibited from uploading company data or other
                    banned files.
                  </p>
                </Dragger>
              </div>
            </div>
          </div>
  
          <div className="bg-white rounded-lg shadow-md px-8 py-6 w-full md:w-1/2 mt-8 mb-20">
            {/* White rectangle with rounded edges */}
            <h1 className="text-xl font-bold mb-2">Content</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Grid for left/right layout */}
              <div className="md:col-span-1"></div> {/* Placeholder for left side */}
              <div className="md:col-span-1">
                <Flex vertical gap={32}>
                  <TextArea
                    showCount
                    maxLength={100}
                    onChange={onChange}
                    placeholder="Write something"
                    style={{
                      height: 120,
                      resize: 'none',
                    }}
                  />
                </Flex>
              </div>
            </div>
          </div>
  
          <div className="bg-white rounded-lg shadow-md px-8 py-6 w-full md:w-1/2 mt-8 mb-20">
            {/* White rectangle with rounded edges */}
            <h1 className="text-xl font-bold mb-2">Things to Pack</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Grid for left/right layout */}
              <div className="md:col-span-1"></div> {/* Placeholder for left side */}
              <div className="md:col-span-1">
                {items.map((item, index) => (
                  <div key={index} className="flex items-center mb-4">
                    <Input
                      value={item}
                      onChange={(e) => handleItemChange(index, e.target.value)}
                      placeholder="Item"
                      className="mr-2"
                    />
                    {items.length > 1 && (
                      <Button
                        type="danger"
                        onClick={() => handleDeleteItem(index)}
                        className="mr-2"
                      >
                        Delete
                      </Button>
                    )}
                    {index === items.length - 1 && (
                      <Button type="primary" onClick={handleAddItem}>
                        Add New
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Button to submit the form */}
          <button 
            onClick={() => navigate('/TripAddedSuccessfully')}
            className="bg-getstarted-customBlue hover:text-black hover:bg-white text-white font-bold py-4 px-8 rounded-full poppins text-xl ml-8 mr-8"
          > 
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreateNewTrip;

