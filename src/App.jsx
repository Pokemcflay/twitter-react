import React from 'react';
import './App.css'
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App(){
    const formatUsername = (userName) => `@${userName}`
    
    return (

        <section className='App'>
                <TwitterFollowCard 
                    formatUsername={formatUsername} 
                    userName="midudev"
                    initialIsFollowing={true} 
                    name="Miguel Angel Duran" />
                <TwitterFollowCard  
                    formatUsername={formatUsername}
                    userName="pokemcflay" 
                    name="Diego Arevalo" />

            
        </section>

    )
}

