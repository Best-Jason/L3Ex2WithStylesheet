import React, { useState } from 'react';
import { ScrollView, View, Text, Button, Alert, Image, StyleSheet } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const QuizApp = () => {
    const questions = [
        {
            id: 1,
            questionText: 'What is the name of this?',
            image: require('./img/flipper.jpg'),
            options: [
                { label: 'midway', value: 'midway' },
                { label: 'four_winns', value: 'four_winns' },
                { label: 'flipper', value: 'flipper' },
            ],
            correctAnswer: 'flipper',
        },
        {
            id: 2,
            questionText: 'What is the name of this?',
            image: require('./img/bayliner.jpg'),
            options: [
                { label: 'bayliner', value: 'bayliner' },
                { label: 'princess', value: 'princess' },
                { label: 'Horse', value: 'Horse' },
            ],
            correctAnswer: 'bayliner',
        },
        {
            id: 3,
            questionText: 'What is the name of this?',
            image: require('./img/four_winns.jpg'),
            options: [
                { label: 'princess', value: 'princess' },
                { label: 'four_winns', value: 'four_winns' },
                { label: 'sea_ray', value: 'sea_ray' },
            ],
            correctAnswer: 'four_winns',
        },
        {
            id: 4,
            title: 'Harder questions',
            questionText: 'What is the name of this one poster?',
            image: require('./img/doctor-sleep.jpg'),
            options: [
                { label: 'princess', value: 'princess' },
                { label: 'four_winns', value: 'four_winns' },
                { label: 'sea_ray', value: 'sea_ray' },
                { label: 'doctor-sleep.jpg', value: 'doctor-sleep.jpg' },
            ],
            correctAnswer: 'doctor-sleep.jpg',
        },
        {
            id: 5,
            title: 'Harder questions',
            questionText: 'What is 1+1',
            image: require('./img/1+1img.jpg'),
            options: [
                { label: '10', value: '10' },
                { label: '3', value: '3' },
                { label: '2', value: '2' },
                { label: '11', value: '11' },
                { label: 'A Bird', value: 'A Bird' },
            ],
            correctAnswer: '11',
        },
    ];

    const [answers, setAnswers] = useState({});
    const [score, setScore] = useState(null);

    const handleAnswerChange = (questionId, value) => {
        setAnswers({ ...answers, [questionId]: value });
    };

    const handleSubmit = () => {
        let totalScore = 0;
        questions.forEach((question) => {
            if (answers[question.id] === question.correctAnswer) {
                totalScore++;
            }
        });
        setScore(totalScore);
        Alert.alert(`Your score is: ${totalScore}/${questions.length}`);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Quiz App</Text>
            {questions.map((question) => (
                <View key={question.id} style={styles.questionContainer}>
                    <Text style={styles.questionText}>{question.questionText}</Text>
                    {question.image && (
                        <Image source={question.image} style={styles.image} />
                    )}
                    <RNPickerSelect
                        onValueChange={(value) => handleAnswerChange(question.id, value)}
                        items={question.options}
                        placeholder={{ label: 'Select an answer...', value: null }}
                    />
                </View>
            ))}
            <Button title="Submit" onPress={handleSubmit} />
            {score !== null && (
                <Text style={styles.scoreText}>Your score is: {score}/{questions.length}</Text>
            )}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#f0f0f0',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10,
    },
    questionContainer: {
        marginBottom: 20,
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 2,
    },
    questionText: {
        fontSize: 18,
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'contain',
        marginBottom: 15,
    },
    scoreText: {
        fontSize: 20,
        textAlign: 'center',
        marginTop: 20,
    },
});

export default QuizApp;


// old code
// import React, { useState } from 'react';
// import { ScrollView, View, Text, Button, Alert, Image } from 'react-native';
// import RNPickerSelect from 'react-native-picker-select';
//
// const QuizApp = () => {
//     const questions = [
//         {
//             id: 1,
//             questionText: 'What is the name of this?',
//             image: require('./img/flipper.jpg'), // Local image in img folder
//             options: [
//                 { label: 'midway', value: 'midway' },
//                 { label: 'four_winns', value: 'four_winns' },
//                 { label: 'flipper', value: 'flipper' },
//             ],
//             correctAnswer: 'flipper',
//         },
//         {
//             id: 2,
//             questionText: 'What is the name of this?',
//             image: require('./img/bayliner.jpg'), // Local image in img folder
//             options: [
//                 { label: 'bayliner', value: 'bayliner' },
//                 { label: 'princess', value: 'princess' },
//                 { label: 'Horse', value: 'Horse' },
//             ],
//             correctAnswer: 'bayliner',
//         },
//         {
//             id: 3,
//             questionText: 'What is the name of this?',
//             image: require('./img/four_winns.jpg'), // Local image in img folder
//             options: [
//                 { label: 'princess', value: 'princess' },
//                 { label: 'four_winns', value: 'four_winns' },
//                 { label: 'sea_ray', value: 'sea_ray' },
//             ],
//             correctAnswer: 'four_winns',
//         },
//         {
//             id: 4,
//             title:'Harder questions',
//             questionText: 'What is the name of this one poster?',
//             image: require('./img/doctor-sleep.jpg'), // Local image in img folder
//             options: [
//                 { label: 'princess', value: 'princess' },
//                 { label: 'four_winns', value: 'four_winns' },
//                 { label: 'sea_ray', value: 'sea_ray' },
//                 { label: 'doctor-sleep.jpg', value: 'doctor-sleep.jpg' },
//             ],
//             correctAnswer: 'doctor-sleep.jpg',
//         },
//         {
//             id: 5,
//             title:'Harder questions',
//             questionText: 'What is 1+1',
//             image: {uri:'data:image/png;base64,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'}, // Local image in img folder
//             options: [
//                 { label: '1', value: '1' },
//                 { label: '11', value: '11' },
//                 { label: '2', value: '2' },
//                 { label: '10', value: '10' },
//                 { label: '3', value: '3' },
//             ],
//             correctAnswer: '11',
//         },
//     ];
//
//     const [answers, setAnswers] = useState({});
//
//     const handleSelectAnswer = (value, questionId) => {
//         setAnswers(prev => ({ ...prev, [questionId]: value }));
//     };
//
//     const handleSubmit = () => {
//         let correctAnswers = 0;
//         questions.forEach(question => {
//             if (answers[question.id] === question.correctAnswer) {
//                 correctAnswers += 1;
//             }
//         });
//         const message = You got ${correctAnswers} out of ${questions.length} correct!;
//         Alert.alert("Quiz Results", message);
//     };
//
//     return (
//         <ScrollView contentContainerStyle ={{ padding: 50 }}>
//             <Text style={{ fontSize: 20, marginBottom: 20 }}>16+ human Quiz</Text>
//             {questions.map((question) => (
//                 <View key={question.id} style={{ marginBottom: 20, alignItems: 'center' }}>
//                     <Text style={{marginBottom:50}}>{question.title}</Text>
//                     <Image source={question.image} style={{ width: 200, height: 150, marginBottom: 10 }} />
//                     <Text>{question.questionText}</Text>
//                     <RNPickerSelect
//                         onValueChange={(value) => handleSelectAnswer(value, question.id)}
//                         items={question.options}
//                         placeholder={{ label: 'Select an answer', value: null }}
//                     />
//                 </View>
//             ))}
//             <Button title="Submit Answers" onPress={handleSubmit} />
//         </ScrollView>
//     );
// };
//
// export default QuizApp;
