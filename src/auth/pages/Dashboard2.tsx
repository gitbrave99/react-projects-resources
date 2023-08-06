import React, { useEffect, useState } from 'react';
import ExtendSesionModal from '../components/ExtendSesionModal';


interface Dashprops{
    setIsLoggedIn:(state:boolean)=>void;
  }
  const Dashboard2:React.FC<Dashprops> = ({setIsLoggedIn}) => {
  const [showModal, setShowModal] = useState(false);
  const [counter, setCounter] = useState(10);
  const [autoLogout, setAutoLogout] = useState(false); // Variable para controlar el cierre de sesión automático

  // Función para mostrar el modal
  const showSessionModal = () => {
    setShowModal(true);
    setCounter(10); // Reiniciar el contador cuando el modal se muestra
  };

  // Función para ocultar el modal y reiniciar el contador
  const hideSessionModal = () => {
    setShowModal(false);
    setCounter(10);
    setAutoLogout(false); // Reiniciar la variable autoLogout cuando se oculta el modal
  };

  // Función para extender la sesión y reiniciar el contador
  const extendSession = () => {
    hideSessionModal();
  };

  // Función para cerrar la sesión y reiniciar el contador
  const closeSession = () => {
    hideSessionModal();
    setIsLoggedIn(false); // Cerrar sesión estableciendo el estado isLoggedIn en false
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
    console.log("counter:", counter);
    
    if (counter === 0) {
      showSessionModal();
    }
  }, [counter]);

  // Cerrar sesión automáticamente si el modal se muestra y no se hace clic en ninguna opción
  useEffect(() => {
    let autoCloseTimer: number;

    if (showModal && !autoLogout) {
      autoCloseTimer = window.setTimeout(() => {
        closeSession();
      }, 10000);
    }

    return () => {
      clearTimeout(autoCloseTimer);
    };
  }, [showModal, autoLogout]);


  useEffect(() => {
    console.log("se creo componente");
    return () => {
        console.log("se destruyo componente");
    }
  }, [])
  

  return (
    <div>
      <h5>Dashboard2</h5>
      <div className="list-group">
        {/* Botones y contenido aquí */}
      </div>
      <ExtendSesionModal showModal={showModal} counter={counter} closeSession={closeSession} extendSession={extendSession} />
    </div>
  );
};

export default Dashboard2;
