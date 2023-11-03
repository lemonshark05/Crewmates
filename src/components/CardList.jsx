import React, { useEffect, useState } from 'react';
import Card from './Card';
import { supabase } from './supabaseClient'; // Adjust the path as necessary

function CardList() {
  const [crewmates, setCrewmates] = useState([]);

  useEffect(() => {
    // Fetch crewmate data from Supabase
    const fetchCrewmates = async () => {
      const { data, error } = await supabase
        .from('post') // Make sure 'post' matches your table name
        .select('id, name, color, speed');

      if (error) {
        console.log('Error fetching crewmates:', error);
      } else {
        setCrewmates(data);
      }
    };

    fetchCrewmates();
  }, []);

  return (
    <div className="App-row">
      {crewmates.map((crewmate) => (
        <Link key={crewmate.id} to={`/crewmate/${crewmate.id}`}>
          <Card
            id={crewmate.id}
            name={crewmate.name}
            speed={crewmate.speed}
            color={crewmate.color}
            link={`/crewmate/${crewmate.id}`}
          />
        </Link>
      ))}
    </div>
  );
}

export default CardList;