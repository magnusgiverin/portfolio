import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";
import styles from "./MapComponent.module.css";

const MapComponent = () => {

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const offset = 120; // Adjust this value to change how many pixels above the target you want to scroll
      const top = section.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({
        top: top,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className={styles.mapComponent}>
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 90,
          center: [0, 20],
          rotate: [-10, 0, 0],
        }}
        style={{
          width: "100%",
          maxWidth: "1800px",
          height: "auto",
        }}
      >
        <Geographies geography={"features.json"}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                style={{
                  default: {
                    fill: "transparent", // Transparent map
                    stroke: "#8A8A8A", // Borders
                    strokeWidth: 0.5,
                    pointerEvents: "none", // Disable interactions
                  },
                }}
              />
            ))
          }
        </Geographies>

        {/* Oslo */}
        <g onClick={() => handleScroll("oslo-section-1")} style={{ cursor: "pointer" }}>
          <Annotation
            subject={[10.7522, 59.9139]}
            dx={77}
            dy={-10}
            connectorProps={{
              stroke: "#FB923C",
              strokeWidth: 0.5,
              strokeLinecap: "round",
            }}
          >
            <text
              textAnchor="start"
              transform="translate(5, 0)"
              className={styles.annotationText}
            >
              Oslo
            </text>
            <text
              y="15"
              textAnchor="start"
              transform="translate(5, 0)"
              className={styles.annotationSubText}
            >
              Capital of Norway
            </text>
          </Annotation>
        </g>

        {/* Jakarta */}
        <g onClick={() => handleScroll("jakarta-section")} style={{ cursor: "pointer" }}>
          <Annotation
            subject={[106.8456, -6.2088]}
            dx={120}
            dy={-80}
            connectorProps={{
              stroke: "#FB923C",
              strokeWidth: 0.5,
              strokeLinecap: "round",
            }}
          >
            <text
              textAnchor="start"
              transform="translate(5, 0)"
              className={styles.annotationText}
            >
              Jakarta
            </text>
            <text
              y="15"
              textAnchor="start"
              transform="translate(5, 0)"
              className={styles.annotationSubText}
            >
              Capital of Indonesia
            </text>
          </Annotation>
        </g>

        {/* London */}
        <g onClick={() => handleScroll("london-section")} style={{ cursor: "pointer" }}>

          <Annotation
            subject={[-0.1278, 51.5074]}
            dx={-45}
            dy={40}
            connectorProps={{
              stroke: "#FB923C",
              strokeWidth: 0.5,
              strokeLinecap: "round",
            }}
          >
            <text
              textAnchor="end"
              transform="translate(-5, 0)"
              className={styles.annotationText}
            >
              London
            </text>
            <text
              y="15"
              textAnchor="end"
              transform="translate(-5, 0)"
              className={styles.annotationSubText}
            >
              Capital of UK
            </text>
          </Annotation>
        </g>

        {/* Mexico City */}
        <g onClick={() => handleScroll("mexico-city-section")} style={{ cursor: "pointer" }}>
          <Annotation
            subject={[-99.1332, 19.4326]}
            dx={-90}
            dy={60}
            connectorProps={{
              stroke: "#FB923C",
              strokeWidth: 0.5,
              strokeLinecap: "round",
            }}
          >
            <text
              textAnchor="end"
              transform="translate(-5, 0)"
              className={styles.annotationText}
            >
              Mexico City
            </text>
            <text
              y="15"
              textAnchor="end"
              transform="translate(-5, 0)"
              className={styles.annotationSubText}
            >
              Capital of Mexico
            </text>
          </Annotation>
        </g>

        {/* Khartoum */}
        <g onClick={() => handleScroll("khartoum-section")} style={{ cursor: "pointer" }}>
          <Annotation
            subject={[32.5599, 15.5007]}
            dx={40}
            dy={100}
            connectorProps={{
              stroke: "#FB923C",
              strokeWidth: 0.5,
              strokeLinecap: "round",
            }}
          >
            <text
              textAnchor="start"
              transform="translate(5, 0)"
              className={styles.annotationText}
            >
              Khartoum
            </text>
            <text
              y="15"
              textAnchor="start"
              transform="translate(5, 0)"
              className={styles.annotationSubText}
            >
              Capital of Sudan
            </text>
          </Annotation>
        </g>

        {/* Trondheim */}
        <g onClick={() => handleScroll("trondheim-section")} style={{ cursor: "pointer" }}>
          <Annotation
            subject={[10.3951, 63.4305]}
            dx={-40}
            dy={-70}
            connectorProps={{
              stroke: "#FB923C",
              strokeWidth: 0.5,
              strokeLinecap: "round",
            }}
          >
            <text
              textAnchor="end"
              transform="translate(-5, 0)"
              className={styles.annotationText}
            >
              Trondheim
            </text>
            <text
              y="15"
              textAnchor="end"
              transform="translate(-5, 0)"
              className={styles.annotationSubText}
            >
              City in Norway
            </text>
          </Annotation>
        </g>
      </ComposableMap>
    </div>
  );
};

export default MapComponent;