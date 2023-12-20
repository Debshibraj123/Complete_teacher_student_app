import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView, TextInput, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';

import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';

const Upload = () => {
  const [file, setFile] = useState(null);
  const [quizTitle, setQuizTitle] = useState('');
  const [questions, setQuestions] = useState('');
  const [selectedType, setSelectedType] = useState('assignment');

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf', // Adjust the type according to your requirements
      });
  
      if (result.type === 'success') {
        // Check if the document is not null before accessing its properties
        if (result.uri) {
          setFile(result);
        } else {
          console.warn('Invalid document picked');
        }
      } else {
        console.warn('Document picking canceled');
      }
    } catch (error) {
      console.error('Error picking document:', error);
    }
  };
  

  const uploadFile = async () => {
    try {
      if (!file) {
        console.warn('No document selected');
        return;
      }

      const documentUri = file.uri;

      // Create a new FormData object
      const formData = new FormData();

      // Append the document file to the form data
      formData.append('assignment', {
        uri: documentUri,
        type: 'application/pdf', // Adjust the type according to your requirements
        name: 'assignment.pdf', // You can customize the filename
      });

      // Use axios to send the form data to your backend
      const response = await axios.post('http://192.168.147.107:8000/uploadAssignment', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Document uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading assignment:', error);
    }
  };
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 17, fontWeight: 'bold' }}>
          Upload Assignment or Quiz
        </Text>

        <RadioButton.Group
          onValueChange={(value) => setSelectedType(value)}
          value={selectedType}
        >
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton value="assignment" />
            <Text>Assignment</Text>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <RadioButton value="quiz" />
            <Text>Quiz</Text>
          </View>
        </RadioButton.Group>

        <TextInput
          value={quizTitle}
          onChangeText={(text) => setQuizTitle(text)}
          style={{
            padding: 10,
            borderColor: '#D0D0D0',
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 5,
          }}
          placeholder="Assignment/Quiz Title"
          placeholderTextColor={'black'}
        />

        <TextInput
          value={questions}
          onChangeText={(text) => setQuestions(text)}
          style={{
            padding: 10,
            borderColor: '#D0D0D0',
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 5,
          }}
          placeholder="Questions (for quiz)"
          placeholderTextColor={'black'}
          multiline
        />

        <Pressable
          onPress={pickDocument}
          style={{
            backgroundColor: '#ABCABA',
            padding: 10,
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
          }}
        >
          <Text style={{ fontWeight: 'bold', color: 'white' }}>
            Pick Document
          </Text>
        </Pressable>

        {file && (
          <View style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 16 }}>
              Selected Document: {file.name}
            </Text>
          </View>
        )}

        <Pressable
          onPress={uploadFile}
          style={{
            backgroundColor: '#ABCABA',
            padding: 10,
            marginTop: 20,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5,
          }}
        >
          <Text style={{ fontWeight: 'bold', color: 'white' }}>
            Upload Assignment/Quiz
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Upload;
