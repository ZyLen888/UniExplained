# Stepla: UniExplained

Style inspired by this amazing website [Short Links with Superpowers](https://dub.sh/)

<img width="1168" alt="Screenshot 2023-07-02 at 10 28 39 PM" src="https://github.com/ZyLen888/UniExplained/assets/38216910/7cf4f496-ad31-4a8b-8924-fef43c4dcb03">

## 🧠 Thoughts

Being a co-founder of Stepla, an online community and platform to bridge high school students with university experiences, during a discussion with fellow co-founders, we were brainstorming how to make high school students transition into uni as smooth as possible. One problem we identified is that high school students found it daunting to look into university documents, handbooks, and relevant pages because of the overwhelming information shown. So we wondered if there is a way to summarise, simplify and explain the page better. 

## 💪 Action

So thinking of the power of OpenAI, I thought, why not try to use their API and see what I can make out of it? Then voila, here is an explainer / summariser that I built with OpenAI API. A link can be entered in the input box, which will return a summarised, explained version of the web page entered. 

## ⭐️ Result

<img width="492" alt="image" src="https://github.com/ZyLen888/UniExplained/assets/38216910/de0428f0-3129-4672-bc8a-dda4cdf3c153"> 

## 🛣 Future Plan

**This is a project in progress**, starting with a simple interface and one input row to enter a link, I will continue to add more features to it!

**Plan:** 
- Find a less expensive API to replace one of the current APIs I am using to extract text from the link provided
- Refine the prompt given to OpenAI API, hoping to receive responses with simpler, more high-schoolers-friendly language! 
- Solve the issue with pages with more complex structures, hence resulting in poor outcome of explanation (ex., handbook with multiple columns and buttons)

## 👀 See this in action 

💰 Deployment will cost some money, as well as I had a concern about my API being abused (which will be quite expensive), so before I find a platform to deploy for FREE, if you want to see this application in ACTION, please follow the steps below to install it on your local machine.

1. Clone the repository to your local machine and navigate to the root directory.

**Please retrieve your own API to install in .env file**

### Installing Dependencies

To install the dependencies, run the following command:

```bash
npm install
```

### Running the application

To run the application, navigate to the client folder and run the following command:

```
npm run dev
