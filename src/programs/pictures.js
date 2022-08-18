const subjects = ["Introduction to Scratch", "Introduction to Java", "Grade 3 Mathematics", "Grade 4 Mathematics", "Grade 5 Mathematics", "Grade 6 Mathematics", "Grade 7 Mathematics", "Grade 8 AMC", "Introduction to Python", "Scratch Intermediate"];
const classPictures = [
    {
        id: 1,
        subject: subjects[0],
        img1: "../src/Fossaul Pictures - Copy/Introduction to scratch/Introduction to Scratch Class 1 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Introduction to scratch/Introduction to Scratch Class 1 (2).jpg"
    },

    {
        id: 2,
        subject: subjects[0],
        img1: "../src/Fossaul Pictures - Copy/Introduction to scratch/Introduction to Scratch Class 2 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Introduction to scratch/Introduction to Scratch Class 2 (2).jpg"
    },
    {
        id: 3,
        subject: subjects[0],
        img1: "../src/Fossaul Pictures - Copy/Introduction to scratch/Introduction to Scratch Class 3 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Introduction to scratch/Introduction to Scratch Class 3 (2).jpg"
    },
    {
        id:4,
        subject: subjects[0],
        img1: "../src/Fossaul Pictures - Copy/Introduction to scratch/Introduction to Scratch Class 4 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Introduction to scratch/Introduction to Scratch Class 4 (2).jpg"
    },
    {
        id: 5,
        subject: subjects[1],
        img1:"../src/Fossaul Pictures - Copy/Introduction to Java/Introduction to Java Class 1 (1).jpg",
        img2:"../src/Fossaul Pictures - Copy/Introduction to Java/Introduction to Java Class 1 (2).jpg"
    },
    {
        id: 6,
        subject: subjects[1],
        img1:"../src/Fossaul Pictures - Copy/Introduction to Java/Introduction to Java Class 2 (1).jpg",
        img2:"../src/Fossaul Pictures - Copy/Introduction to Java/Introduction to Java Class 2 (2).jpg",
    },
    {
        id: 7,
        subject: subjects[1],
        img1:"../src/Fossaul Pictures - Copy/Introduction to Java/Introduction to Java Class 3 (1).jpg",
        img2:"../src/Fossaul Pictures - Copy/Introduction to Java/Introduction to Java Class 3 (2).jpg"
    },
    {
        id: 8,
        subject: subjects[1],
        img1: "../src/Fossaul Pictures - Copy/Introduction to Java/Introduction to Java Class 4 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Introduction to Java/Introduction to Java Class 4 (2).jpg",
    },
    {
        id: 9,
        subject: subjects[3],
        img1: "../src/Fossaul Pictures - Copy/Grade 4 Mathematics/Grade 4 Mathemactics Class 1 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Grade 4 Mathematics/Grade 4 Mathematics Class 1 (2).jpg"
    },
    {
        id: 10,
        subject: subjects[3],
        img1: "../src/Fossaul Pictures - Copy/Grade 4 Mathematics/Grade 4 Mathematics Class 2 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Grade 4 Mathematics/Grade 4 Mathematics Class 2 (2).jpg"
    },
    {
        id: 11,
        subject: subjects[3],
        img1: "../src/Fossaul Pictures - Copy/Grade 4 Mathematics/Grade 4 Mathematics Class 3 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Grade 4 Mathematics/Grade 4 Mathematics Class 3 (2).jpg"
    },
    {
        id: 12,
        subject: subjects[3],
        img1: "../src/Fossaul Pictures - Copy/Grade 4 Mathematics/Grade 4 Mathematics Class 4 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Grade 4 Mathematics/Grade 4 Mathematics Class 4 (2).jpg"
    },
    {
        id: 13,
        subject: subjects[6],
        img1: "../src/Fossaul Pictures - Copy/Grade 7 Mathematics/Grade 7 Mathematics Class 1 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Grade 7 Mathematics/Grade 7 Mathematics Class 1 (2).jpg"
    },
    {
        id: 14,
        subject: subjects[6],
        img1: "../src/Fossaul Pictures - Copy/Grade 7 Mathematics/Grade 7 Mathematics Class 2 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Grade 7 Mathematics/Grade 7 Mathematics Class 2 (2).jpg"
    },
    {
        id: 15,
        subject: subjects[6],
        img1: "../src/Fossaul Pictures - Copy/Grade 7 Mathematics/Grade 7 Mathematics Class 3 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Grade 7 Mathematics/Grade 7 Mathematics Class 3 (2).jpg"
    },
    {
        id: 16,
        subject: subjects[6],
        img1: "../src/Fossaul Pictures - Copy/Grade 7 Mathematics/Grade 7 Mathematics Class 4 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Grade 7 Mathematics/Grade 7 Mathematics Class 4 (2).jpg"
    },
    {
        id: 17,
        subject: subjects[0],
        img1: "../src/Fossaul Pictures - Copy/Introduction to Scratch/Introduction to Scratch Class 5 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Introduction to Scratch/Introduction to Scratch Class 5 (2).jpg",
    },
    {
        id: 18,
        subject: subjects[0],
        img1: "../src/Fossaul Pictures - Copy/Introduction to Scratch/Introduction to Scratch Class 6 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Introduction to Scratch/Introduction to Scratch Class 6 (2).jpg",
    },
    {
        id: 19,
        subject: subjects[0],
        img1: "../src/Fossaul Pictures - Copy/Introduction to Scratch/Introduction to Scratch Class 7 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Introduction to Scratch/Introduction to Scratch Class 7 (2).jpg",
    },
    {
        id: 20,
        subject: subjects[0],
        img1: "../src/Fossaul Pictures - Copy/Introduction to Scratch/Introduction to Scratch Class 8 (1).jpg",
    },
    {
        id: 21,
        subject: subjects[1],
        img1: "../src/Fossaul Pictures - Copy/Introduction to Java/Introduction to Java Class 5 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Introduction to Java/Introduction to Java Class 5 (2).jpg"
    },
    {
        id: 22,
        subject: subjects[1],
        img1: "../src/Fossaul Pictures - Copy/Introduction to Java/Introduction to Java Class 6 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Introduction to Java/Introduction to Java Class 6 (2).jpg"
    },
    {
        id: 23,
        subject: subjects[1],
        img1: "../src/Fossaul Pictures - Copy/Introduction to Java/Introduction to Java Class 7 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Introduction to Java/Introduction to Java Class 7 (2).jpg"
    },
    {
        id: 24,
        subject: subjects[1],
        img1: "../src/Fossaul Pictures - Copy/Introduction to Java/Introduction to Java Class 8 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Introduction to Java/Introduction to Java Class 8 (2).jpg"
    },
    {
        id: 25,
        subject: subjects[4],
        img1: "../src/Fossaul Pictures - Copy/Grade 5 Mathematics/Grade 5 Mathematics Class 1 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Grade 5 Mathematics/Grade 5 Mathematics Class 1 (2).jpg",
    },
    {
        id: 26,
        subject: subjects[4],
        img1: "../src/Fossaul Pictures - Copy/Grade 5 Mathematics/Grade 5 Mathematics Class 2 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Grade 5 Mathematics/Grade 5 Mathematics Class 2 (2).jpg",
    },
    {
        id: 27,
        subject: subjects[4],
        img1: "../src/Fossaul Pictures - Copy/Grade 5 Mathematics/Grade 5 Mathematics Class 3 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Grade 5 Mathematics/Grade 5 Mathematics Class 3 (2).jpg",
    },
    {
        id: 28,
        subject: subjects[4],
        img1: "../src/Fossaul Pictures - Copy/Grade 5 Mathematics/Grade 5 Mathematics Class 4 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Grade 5 Mathematics/Grade 5 Mathematics Class 4 (2).jpg",
    },
    {
        id: 29,
        subject: subjects[9],
        img1: "../src/Fossaul Pictures - Copy/Scratch Intermediate/Scratch Intermediate Class 1 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Scratch Intermediate/Scratch Intermediate Class 1 (2).jpg"
    },
    {
        id: 30,
        subject: subjects[9],
        img1: "../src/Fossaul Pictures - Copy/Scratch Intermediate/Scratch Intermediate Class 2 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Scratch Intermediate/Scratch Intermediate Class 2 (2).jpg"
    },
    {
        id: 31,
        subject: subjects[9],
        img1: "../src/Fossaul Pictures - Copy/Scratch Intermediate/Scratch Intermediate Class 3 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Scratch Intermediate/Scratch Intermediate Class 3 (2).jpg"
    },
    {
        id: 32,
        subject: subjects[9],
        img1: "../src/Fossaul Pictures - Copy/Scratch Intermediate/Scratch Intermediate Class 4 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Scratch Intermediate/Scratch Intermediate Class 4 (2).jpg"
    },
    {
        id: 33,
        subject: subjects[8],
        img1: "../src/Fossaul Pictures - Copy/Introduction to Python/Introduction to Python Class 1 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Introduction to Python/Introduction to Python Class 1 (2).jpg",
    },
    {
        id: 34,
        subject: subjects[8],
        img1: "../src/Fossaul Pictures - Copy/Introduction to Python/Introduction to Python Class 2 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Introduction to Python/Introduction to Python Class 2 (2).jpg",
    },
    {
        id: 35,
        subject: subjects[8],
        img1: "../src/Fossaul Pictures - Copy/Introduction to Python/Introduction to Python Class 3 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Introduction to Python/Introduction to Python Class 3 (2).jpg",
    },

    {
        id: 36,
        subject: subjects[8],
        img1: "../src/Fossaul Pictures - Copy/Introduction to Python/Introduction to Python Class 4 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Introduction to Python/Introduction to Python Class 4 (2).jpg",
    },
    {
        id: 37,
        subject: subjects[8],
        img1: "../src/Fossaul Pictures - Copy/Introduction to Python/Introduction to Python Class 5 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Introduction to Python/Introduction to Python Class 5 (2).jpg",
    },
    {
        id: 38,
        subject: subjects[8],
        img1: "../src/Fossaul Pictures - Copy/Introduction to Python/Introduction to Python Class 6 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Introduction to Python/Introduction to Python Class 6 (2).jpg",
    },
    {
        id: 39,
        subject: subjects[3],
        img1: "../src/Fossaul Pictures - Copy/Grade 3 Mathematics/Grade 3 Mathematics Class 1 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Grade 3 Mathematics/Grade 3 Mathematics Class 1 (2).jpg"
    },
    {
        id: 40,
        subject: subjects[3],
        img1: "../src/Fossaul Pictures - Copy/Grade 3 Mathematics/Grade 3 Mathematics Class 2 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Grade 3 Mathematics/Grade 3 Mathematics Class 2 (2).jpg"
    },
    {
        id: 41,
        subject: subjects[3],
        img1: "../src/Fossaul Pictures - Copy/Grade 3 Mathematics/Grade 3 Mathematics Class 3 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Grade 3 Mathematics/Grade 3 Mathematics Class 3 (2).jpg"
    },
    {
        id: 42,
        subject: subjects[3],
        img1: "../src/Fossaul Pictures - Copy/Grade 3 Mathematics/Grade 3 Mathematics Class 4 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Grade 3 Mathematics/Grade 3 Mathematics Class 4 (2).jpg"
    },
    {
        id: 43,
        subject: subjects[5],
        img1: "../src/Fossaul Pictures - Copy/Grade 6 Mathematics/Grade 6 Mathematics Class 1 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Grade 6 Mathematics/Grade 6 Mathematics Class 1 (2).jpg"
    },
    {
        id: 44,
        subject: subjects[5],
        img1: "../src/Fossaul Pictures - Copy/Grade 6 Mathematics/Grade 6 Mathematics Class 2 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Grade 6 Mathematics/Grade 6 Mathematics Class 2 (2).jpg"
    },
    {
        id: 45,
        subject: subjects[5],
        img1: "../src/Fossaul Pictures - Copy/Grade 6 Mathematics/Grade 6 Mathematics Class 3 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Grade 6 Mathematics/Grade 6 Mathematics Class 3 (2).jpg"
    },
    {
        id: 46,
        subject: subjects[5],
        img1: "../src/Fossaul Pictures - Copy/Grade 6 Mathematics/Grade 6 Mathematics Class 4 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Grade 6 Mathematics/Grade 6 Mathematics Class 4 (2).jpg"
    },
    {
        id: 47,
        subject: subjects[3],
        img1: "../src/Fossaul Pictures - Copy/Grade 4 Mathematics/Grade 4 Mathematics Class 5 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Grade 4 Mathematics/Grade 4 Mathematics Class 5 (2).jpg"
    },
    {
        id: 48,
        subject: subjects[3],
        img1: "../src/Fossaul Pictures - Copy/Grade 4 Mathematics/Grade 4 Mathematics Class 6 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Grade 4 Mathematics/Grade 4 Mathematics Class 6 (2).jpg"
    },
    {
        id: 49,
        subject: subjects[3],
        img1: "../src/Fossaul Pictures - Copy/Grade 4 Mathematics/Grade 4 Mathematics Class 7 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Grade 4 Mathematics/Grade 4 Mathematics Class 7 (2).jpg"
    },

    {
        id: 50,
        subject: subjects[3],
        img1: "../src/Fossaul Pictures - Copy/Grade 4 Mathematics/Grade 4 Mathematics Class 8 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Grade 4 Mathematics/Grade 4 Mathematics Class 8 (2).jpg"
    },
    {
        id: 51,
        subject: subjects[7],
        img1: "../src/Fossaul Pictures - Copy/Grade 8 AMC/Grade 8 AMC Class 1 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Grade 8 AMC/Grade 8 AMC Class 1 (2).jpg"
    },
    {
        id: 52,
        subject: subjects[7],
        img1: "../src/Fossaul Pictures - Copy/Grade 8 AMC/Grade 8 AMC Class 2 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Grade 8 AMC/Grade 8 AMC Class 2 (2).jpg"
    },
    {
        id: 53,
        subject: subjects[7],
        img1: "../src/Fossaul Pictures - Copy/Grade 8 AMC/Grade 8 AMC Class 3 (1).jpg",
        img2: "../src/Fossaul Pictures - Copy/Grade 8 AMC/Grade 8 AMC Class 3 (2).jpg"
    },
    
];

export default classPictures;