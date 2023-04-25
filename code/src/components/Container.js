import React from 'react'
import { useSelector } from 'react-redux';
import { CompassAnimation } from 'components/LoadingStates/CompassAnimation';
import StartPage from './StartPage.js'
import LabyrinthPage from './LabyrinthPage.js'

const Container = () => {
  const coordinates = useSelector((store) => store.labyrinth.coordinates)
  const isLoading = useSelector((store) => store.loading.isLoading)

  console.log('coordinates:', coordinates)
  console.log('isLoading:', isLoading)

  return (
    <div className="Wrapper">
      {!isLoading ? (
        <div className="Container">
          {coordinates === '' && <StartPage />}
          {coordinates !== '' && <LabyrinthPage />}
        </div>
      ) : (
        <CompassAnimation />
      )}
    </div>
  )
}

export default Container;