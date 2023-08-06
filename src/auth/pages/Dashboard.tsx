import React, { useEffect, useState } from 'react';
import ExtendSesionModal from '../components/ExtendSesionModal';

interface Dashprops{
  setIsLoggedIn:(state:boolean)=>void;
}

const Dashboard:React.FC<Dashprops> = ({setIsLoggedIn}) => {

  const [showModal, setShowModal] = useState(false);
  const [counter, setCounter] = useState(10);

  // Función para mostrar el modal
  const showSessionModal = () => {
    setCounter(10)
    setShowModal(true);
  };

  // Función para ocultar el modal y reiniciar el contador
  const hideSessionModal = () => {
    setShowModal(false);
    setCounter(10);
  };

  // Función para extender la sesión y reiniciar el contador
  const extendSession = () => {
    console.log("extend sesion");
    hideSessionModal();
  };

  // Función para cerrar la sesión y reiniciar el contador
  const closeSession = () => {
    console.log("close sesion");
    setIsLoggedIn(false)
    hideSessionModal();
  };

  // Función que se ejecutará cada vez que haya una interacción con la aplicación
  const resetTimer = () => {
    setCounter(10);
  };

  useEffect(() => {
    // Creamos un evento que se activará cuando haya una interacción con la aplicación
    const resetTimerOnInteraction = () => {
      resetTimer();
    };

    // Agregamos el evento al documento
    document.addEventListener('click', resetTimerOnInteraction);
    document.addEventListener('keypress', resetTimerOnInteraction);

    // Creamos el temporizador para mostrar el modal después de 1 minuto
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    // Limpiamos los eventos y el temporizador cuando el componente se desmonta
    return () => {
      document.removeEventListener('click', resetTimerOnInteraction);
      document.removeEventListener('keypress', resetTimerOnInteraction);
      clearInterval(interval);
    };
  }, []);

  // Mostrar el modal cuando el contador llegue a cero
  useEffect(() => {
    console.log("counter", counter);
    
    if (counter === 0) {
      showSessionModal();
    }
  }, [counter]);

  // Cerrar sesión automáticamente después de 10 segundos de mostrar el modal
  useEffect(() => {
    let autoCloseTimer: number;
    
    
    if (showModal) {
      autoCloseTimer = window.setTimeout(() => {
        hideSessionModal();
        setIsLoggedIn(false);
        console.log("cerrando modal");
      }, 10000);
    }

    return () => {
      clearTimeout(autoCloseTimer);
    };
  }, [showModal]);



  useEffect(() => {
    console.log("se creo el dashboar");
    return () => {
      console.log("se destruyo el dashboar");
    }
  }, [])
  

  return (
    <div>
      <h5>Dashboard</h5>
      <div className="list-group">
        {/* Botones y contenido aquí */}
      </div>
      <ExtendSesionModal showModal={showModal} counter={counter} closeSession={closeSession} extendSession={extendSession} />
    </div>
  );
};

export default Dashboard;