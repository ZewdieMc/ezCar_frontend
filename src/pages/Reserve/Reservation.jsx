import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CarDetail from '../../components/Cars/CarDetail';
import getCars from '../../redux/actions/Car/getCars';

function Reservation() {
  const dispatch = useDispatch();
  const { cars } = useSelector((state) => state.cars);

  const [ReserveOpener, setReserveOpener] = useState(true);

  const toggleReservation = () => {
    setReserveOpener(!ReserveOpener);
  };

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const { id } = useParams();

  const car = cars.filter((car) => car.id === Number(id))[0];

  return (
    <section
      className="flex flex-col gap-3 items-center justify-between md:flex-row p-4  md:p-8 md:pt-8 "
      id="Reservation"
    >
      {car && car.id && (
        <>
          <img
            src={car.image}
            alt={car.name}
            className="flex-1 rounded-3xl max-h-screen w-11/12 md:w-full object-cover"
          />
          <CarDetail
            id={Number(id)}
            name={car.name}
            carType={car.car_type}
            carBrand={car.brand}
            carPrice={car.fee_per_day}
            carColor={car.color}
            toggleReservation={toggleReservation}
            ReserveOpener={ReserveOpener}
          />
        </>
      )}
    </section>
  );
}

export default Reservation;