import React, { useState, useEffect } from 'react';
import { firestore } from '../../firebase';
import { collection, getDocs } from 'firebase/firestore';

const ExistingJournalOverview = () => {
 const [journals, setJournals] = useState([]);

 useEffect(() => {
    const fetchJournals = async () => {
      const journalCollectionRef = collection(firestore, "Journal");
      const journalSnapshot = await getDocs(journalCollectionRef);
      const journalList = journalSnapshot.docs.map(doc => ({
        ...doc.data(),
        id: doc.id,
      }));
      setJournals(journalList);
    };

    fetchJournals();
 }, []);

 return (
    <div className="mx-auto max-w-lg rounded-3xl bg-white p-7 px-7 py-7 mobile:mx-auto mobile:max-w-sm md:max-w-lg md:p-10 md:px-11 md:py-11 lg:max-w-2xl dark:bg-black">
      <h1 className="pb-10 text-center font-primary font-semibold uppercase tracking-wider mobile:text-2xl sm:text-2xl md:text-3xl lg:text-4xl dark:text-white">
        Existing Journals
      </h1>
      <div className="flex flex-col">
        {journals.map((journal) => (
          <div key={journal.id} className="mb-4 p-4 border rounded-lg">
            <h2 className="text-xl font-semibold">{journal.title}</h2>
            <p className="text-gray-600 dark:text-gray-400">{journal.content}</p>
            {journal.images && journal.images.map((imageUrl, index) => (
              <img key={index} src={imageUrl} alt={`Journal entry ${journal.title}`} className="mt-2 w-full h-auto" />
            ))}
          </div>
        ))}
      </div>
    </div>
 );
};

export default ExistingJournalOverview;
