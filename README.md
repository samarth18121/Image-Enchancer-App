# 🖼️ AI Image Enhancer (React)

This is a simple React application that allows users to **upload an image** and get an **AI-enhanced version** using the [PicWish API](https://picwish.com/api).

## 🚀 Features

- Upload and preview original images  
- Enhance images via AI (super-resolution)  
- Clean and responsive UI with loading indicators  
- Error handling for failed enhancements  

## 📦 Tech Stack

- React  
- Axios  
- Tailwind CSS *(optional if used for styling)*  
- PicWish API (Free-tier)



## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ai-image-enhancer.git
cd ai-image-enhancer

```
### 2. Install Dependencies

```bash
npm install

```
### 3. Add Your API Key

The app uses the PicWish API to enhance images. Create a free account at PicWish API Console and generate your API key.

⚠️ Note:
The default API key included in the project has limited free usage.
If it reaches the quota, you will need to:

Create a new account on picwish.com

Generate a new API key

Replace it in utils/enhancedImageAPI.js:

## 4. Start the App

```bash
npm start
