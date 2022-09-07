import * as THREE from 'three';
import React, { useRef, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { StatusBar } from 'expo-status-bar'
import { Canvas, useFrame } from '@react-three/fiber/native'
import { Sphere, Text as DraiText } from '@react-three/drei/native'
// import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry'
// import { Text as TroikaText } from "troika-three-text";
// import { extend } from '@react-three/fiber/native'
// extend({ TroikaText });

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

function Box(props) {
  const mesh = useRef(null)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
  return (
    <mesh
      {...props}
      ref={mesh}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

function Box2() {
  const width = 8;  // ui: width
  const height = 8;  // ui: height
  const depth = 8;  // ui: depth
  const widthSegments = 4;  // ui: widthSegments
  const heightSegments = 4;  // ui: heightSegments
  const depthSegments = 4;  // ui: depthSegments
  const geometry = new THREE.BoxGeometry(
    width, height, depth,
    widthSegments, heightSegments, depthSegments);
  const aaa = React.createElement('text', geometry)
  extend({ aaa })
  return aaa
}

const textProps = {
  fontSize: 3.9,
  font: 'http://fonts.gstatic.com/s/modak/v5/EJRYQgs1XtIEskMA-hI.woff'
}

const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";


export default function App() {
  return (
    <React.Fragment>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        <Sphere>
          <meshBasicMaterial color="hotpink" />
        </Sphere>
        {/* <mesh>
          <TextGeometry attach='geometry' args={['three.js']} />
          <meshStandardMaterial attach='material' />
        </mesh> */}
        {/* <DraiText text={'dfgdfg'}>fgdsdfg</DraiText> */}
        {/* <TroikaText text={'dfgdfg'}>fgdsdfg</TroikaText> */}
        {/* <Text text={'dfgdfg'}>fgdsdfg</Text> */}
        {/* <text text={'dfgdfg'}>sadfsdfsdfsdf</text> */}
      </Canvas>
      <View style={styles.container}>
        <Text>fgdsdfg</Text>
        <StatusBar style="auto" />
      </View>
    </React.Fragment>
  )
}
