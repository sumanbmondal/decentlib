import React, { useEffect, useRef } from 'react';

const Map = ({ markers }) => {
  const mapRef = useRef(null);
  const mapInstance = useRef(null);

  useEffect(() => {
    if (mapRef.current) {
      const google = window.google;

      // Initialize the map
      mapInstance.current = new google.maps.Map(mapRef.current, {
        center: { lat: 0, lng: 0 }, // Initial center
        zoom: 12, // Initial zoom level
      });
    }
  }, []);

  useEffect(() => {
    if (mapInstance.current && markers.length > 0) {
      const google = window.google;
      const bounds = new google.maps.LatLngBounds();

      // Clear existing markers
      mapInstance.current.markers?.forEach((marker) => marker.setMap(null));

      mapInstance.current.markers = markers.map((marker) => {
        const position = new google.maps.LatLng(marker.location.coordinates[1], marker.location.coordinates[0]);
        bounds.extend(position);

        const infoWindow = new google.maps.InfoWindow({
          content: `<h3>${marker.title}</h3><p>User: ${marker.user.name}</p><p>Contact: ${marker.user.contact}</p>`
        });

        const mapMarker = new google.maps.Marker({
          position,
          map: mapInstance.current,
          title: marker.title,
        });

        mapMarker.addListener('click', () => {
          infoWindow.open(mapInstance.current, mapMarker);
        });

        return mapMarker;
      });

      // Adjust the map to fit all markers
      mapInstance.current.fitBounds(bounds);
    }
  }, [markers]);

  return <div ref={mapRef} style={{ width: '100%', height: '500px' }} />;
};

export default Map;
