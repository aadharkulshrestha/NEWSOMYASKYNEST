import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../../firebase';
import {getStorage, ref} from projectStorage

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  const storage = getStorage();

  // Points to the root reference
const storageRef = ref(storage);

// Points to 'images'
const imagesRef = ref(storageRef, 'images');

// Points to 'images/space.jpg'
// Note that you can use variables to create child values
const fileName = 'space.jpg';
const spaceRef = ref(imagesRef, fileName);

// File path is 'images/space.jpg'
const path = spaceRef.fullPath;

// File name is 'space.jpg'
const name = spaceRef.name;

// Points to 'images'
const imagesRefAgain = spaceRef.parent;

  // useEffect(() => {
  //   // references
  //   const storageRef = projectStorage.ref(file.name);
  //   const collectionRef = projectFirestore.collection('images');
    
  //   storageRef.put(file).on('state_changed', (snap) => {
  //     let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
  //     setProgress(percentage);
  //   }, (err) => {
  //     setError(err);
  //   }, async () => {
  //     const url = await storageRef.getDownloadURL();
  //     const createdAt = timestamp();
  //     await collectionRef.add({ url, createdAt });
  //     setUrl(url);
  //   });
  // }, [file]);

  // return { progress, url, error };
}

export default useStorage;