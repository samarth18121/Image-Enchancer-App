import axios from "axios";
const BASE_URL = "https://techhk.aoscdn.com";
const API_KEY = "wxwe9zhb6uxa1kqbo";
const enhancedImageAPI = async (file) => {
  //code to call api and get enhanced image url

  try {
    const taskId = await uploadImage(file);
    console.log("Image Uploaded Succesfully with task id", taskId);

    
    const enhancedImageData = await pollforEnhancedImage(taskId);
    console.log("Enhanced Image Data", enhancedImageData);

    return enhancedImageData;
  } catch (error) {
    console.log("Error enhancing Image", error.message);
  }
};

const uploadImage = async (file) => {
  //code to upload image
  // post api "/api/tasks/visual/scale"

  const formData = new FormData();
  formData.append("image_file", file);

  const { data } = await axios.post(
    `${BASE_URL}/api/tasks/visual/scale`,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    }
  );
  //console.log("Data", data);

  if (!data?.data?.task_id) {
    throw new Error("Error uploading image");
  }

  return data.data.task_id;
};

const fetchImage = async (taskId) => {
  //fetch enhanced image
  // get api "/api/tasks/visual/scale/{task_id}"
  const { data } = await axios.get(
    `${BASE_URL}/api/tasks/visual/scale/${taskId}`,
    {
      headers: {
        "Content-Type": "multipart/form-data",
        "X-API-KEY": API_KEY,
      },
    }
  );

  if (!data?.data) {
    throw new Error("Failed to fetch Enhanced Image");
  }

  return data.data;
};

const pollforEnhancedImage = async (taskId,retries=0) => {
    const result=await fetchImage(taskId);
    if (result.state === 4) {
      console.log("Processing...!");
      if(retries>=20){
        throw new Error("Max retries reached.Please try again later.");
      }
    //wait for 2 seconds

    await new Promise((resolve) => setTimeout(resolve, 2000));
    return pollforEnhancedImage(taskId,retries+1);
    }
    return result;
    

}

export default enhancedImageAPI;

