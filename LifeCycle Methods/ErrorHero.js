import React from 'react'

export default function ErrorHero({ heroName }) {
    if (heroName === 'Joker') {
        throw new Error('Not a Hero..')
    }
    return (
        <div>
            {heroName}
        </div>
    )
}
