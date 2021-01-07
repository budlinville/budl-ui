import React, { useRef, useEffect, useMemo, useState, useContext, useCallback, createContext } from "react"
import { Vector2 } from 'three'
import { useFrame, useThree } from 'react-three-fiber';
import { FXAAShader } from 'three/examples/jsm/shaders/FXAAShader';

const context = createContext();

export const useHover = () => {
  const ref = useRef();
  const setHovered = useContext(context);
  const onPointerOver = useCallback(() => setHovered(state => [...state, ref.current]), []);
  const onPointerOut = useCallback(() => setHovered(state => state.filter(mesh => mesh !== ref.current)), []);
  return { ref, onPointerOver, onPointerOut };
}

const Outline = ({ children }) => {
  const { gl, scene, camera, size } = useThree();
  const composer = useRef();
  const [hovered, set] = useState([]);
	const aspect = useMemo(() => new Vector2(size.width, size.height), [size]);
	
  useEffect(() => composer.current.setSize(size.width, size.height), [size]);
	useFrame(() => composer.current.render(), 1);
	
  return (
    <context.Provider value={set}>
      {children}
      <effectComposer ref={composer} args={[gl]}>
        <renderPass attachArray='passes' args={[scene, camera]} />
        <outlinePass
          attachArray='passes'
          args={[aspect, scene, camera]}
          selectedObjects={hovered}
          visibleEdgeColor='white'
          edgeStrength={100}
          edgeThickness={20}
        />
        <shaderPass
          attachArray='passes'
          args={[FXAAShader]}
          uniforms-resolution-value={[1 / size.width, 1 / size.height]}
        />
      </effectComposer>
    </context.Provider>
  );
}

export default Outline;