import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { Segment } from 'semantic-ui-react';

function Chatbot() {
  const steps = [
    {
      id: 'ChooseLanguage',
      message: 'Please choose your language / Veuillez choisir votre langue',
      trigger: 'LanguageOptions'
    },
    {
      id: 'LanguageOptions',
      options: [
        { value: 'english', label: 'English', trigger: 'GreetInEnglish' },
        { value: 'french', label: 'Français', trigger: 'GreetInFrench' }
      ]
    },
    // English conversation
    {
      id: 'GreetInEnglish',
      message: 'Hello! Welcome to our site.',
      trigger: 'AskNameInEnglish'
    },
    {
      id: 'AskNameInEnglish',
      message: 'What is your name?',
      trigger: 'WaitingUserNameInEnglish'
    },
    {
      id: 'WaitingUserNameInEnglish',
      user: true,
      trigger: 'WelcomeUserInEnglish'
    },
    {
      id: 'WelcomeUserInEnglish',
      message: 'Hi {previousValue}, nice to meet you! How can I assist you today?',
      trigger: 'UserQuestionInEnglish'
    },
    {
      id: 'UserQuestionInEnglish',
      options: [
        { value: 'distanceLearning', label: 'Tell me about distance learning', trigger: 'DistanceLearningInEnglish' },
        { value: 'adaptiveLearning', label: 'Tell me about adaptive learning', trigger: 'AdaptiveLearningInEnglish' },
      ]
    },
    {
      id: 'DistanceLearningInEnglish',
      message: 'Distance learning is a method of education where students can study remotely without being physically present in a traditional classroom setting.',
      trigger: 'MoreQuestionsInEnglish'
    },
    {
      id: 'AdaptiveLearningInEnglish',
      message: 'Adaptive learning is a method of education that uses technology to adjust the type and difficulty of learning material to the individual needs of each student.',
      trigger: 'MoreQuestionsInEnglish'
    },
    {
      id: 'MoreQuestionsInEnglish',
      message: 'Do you have any other questions?',
      trigger: 'AdditionalQuestionsInEnglish'
    },
    {
      id: 'AdditionalQuestionsInEnglish',
      options: [
        { value: 'yes', label: 'Yes', trigger: 'UserQuestionInEnglish' },
        { value: 'no', label: 'No', trigger: 'EndMessageInEnglish' },
      ]
    },
    {
      id: 'EndMessageInEnglish',
      message: 'Thank you for your questions! Have a great day!',
      end: true
    },
    // French conversation
    {
      id: 'GreetInFrench',
      message: 'Bonjour! Bienvenue sur notre site.',
      trigger: 'AskNameInFrench'
    },
    {
      id: 'AskNameInFrench',
      message: 'Quel est votre nom?',
      trigger: 'WaitingUserNameInFrench'
    },
    {
      id: 'WaitingUserNameInFrench',
      user: true,
      trigger: 'WelcomeUserInFrench'
    },
    {
      id: 'WelcomeUserInFrench',
      message: 'Salut {previousValue}, ravi de vous rencontrer! Comment puis-je vous aider aujourd\'hui?',
      trigger: 'UserQuestionInFrench'
    },
    {
      id: 'UserQuestionInFrench',
      options: [
        { value: 'distanceLearning', label: 'Parlez-moi de l\'enseignement à distance', trigger: 'DistanceLearningInFrench' },
        { value: 'adaptiveLearning', label: 'Parlez-moi de l\'apprentissage adaptatif', trigger: 'AdaptiveLearningInFrench' },
      ]
    },
    {
      id: 'DistanceLearningInFrench',
      message: 'L\'enseignement à distance est une méthode d\'éducation où les étudiants peuvent étudier à distance sans être physiquement présents dans une salle de classe traditionnelle.',
      trigger: 'MoreQuestionsInFrench'
    },
    {
      id: 'AdaptiveLearningInFrench',
      message: 'L\'apprentissage adaptatif est une méthode d\'éducation qui utilise la technologie pour ajuster le type et la difficulté du matériel pédagogique aux besoins individuels de chaque étudiant.',
      trigger: 'MoreQuestionsInFrench'
    },
    {
      id: 'MoreQuestionsInFrench',
      message: 'Avez-vous d\'autres questions?',
      trigger: 'AdditionalQuestionsInFrench'
    },
    {
      id: 'AdditionalQuestionsInFrench',
      options: [
        { value: 'yes', label: 'Oui', trigger: 'UserQuestionInFrench' },
        { value: 'no', label: 'Non', trigger: 'EndMessageInFrench' },
      ]
    },
    {
      id: 'EndMessageInFrench',
      message: 'Merci pour vos questions! Bonne journée!',
      end: true
    }
  ];

  return (
    <Segment floated="right">
      <ChatBot steps={steps} />
    </Segment>
  );
}

export default Chatbot;
