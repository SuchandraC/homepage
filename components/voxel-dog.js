import { useState, useEffect, useRef, useCallback } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { DogContainer, DogSpinner } from './voxel-dog-loader'

function easeOutCirc(x) {
  return Math.sqrt(1 - Math.pow(x - 1, 2))
}

const VoxelDog = () => {
  const refContainer = useRef()
  const [loading, setLoading] = useState(true)
  const refRenderer = useRef()

  const handleWindowResize = useCallback(() => {
    const { current: renderer } = refRenderer
    const { current: container } = refContainer
    if (container && renderer) {
      const scW = container.clientWidth
      const scH = container.clientHeight
      renderer.setSize(scW, scH)
    }
  }, [])

  useEffect(() => {
    const { current: container } = refContainer
    if (container) {
      const scW = container.clientWidth
      const scH = container.clientHeight

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
      })
      renderer.setPixelRatio(window.devicePixelRatio)
      renderer.setSize(scW, scH)
      renderer.outputEncoding = THREE.sRGBEncoding
      renderer.shadowMap.enabled = true
      renderer.shadowMap.type = THREE.PCFSoftShadowMap
      container.appendChild(renderer.domElement)
      refRenderer.current = renderer

      const scene = new THREE.Scene()
      const target = new THREE.Vector3(0, 1.6, 0)
      const initialCameraPosition = new THREE.Vector3(
        20 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI)
      )
      const scale = scH * 0.005 + 4.8
      const camera = new THREE.OrthographicCamera(
        -scale,
        scale,
        scale,
        -scale,
        0.01,
        50000
      )
      camera.position.copy(initialCameraPosition)
      camera.lookAt(target)

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
      scene.add(ambientLight)

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.9)
      directionalLight.position.set(5, 15, 5)
      directionalLight.castShadow = true
      directionalLight.shadow.mapSize.width = 2048
      directionalLight.shadow.mapSize.height = 2048
      scene.add(directionalLight)

      const fillLight = new THREE.DirectionalLight(0xffffff, 0.4)
      fillLight.position.set(-5, 5, 10)
      scene.add(fillLight)

      const controls = new OrbitControls(camera, renderer.domElement)
      controls.autoRotate = true
      controls.autoRotateSpeed = 1.5
      controls.target = target

      // Materials
      const whiteMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff })
      const blackMaterial = new THREE.MeshStandardMaterial({ color: 0x111111 })
      const darkGrayMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 })
      const redMaterial = new THREE.MeshStandardMaterial({ color: 0xCC3333 })
      const yellowMaterial = new THREE.MeshStandardMaterial({ color: 0xFFCC00 })
      const orangeMaterial = new THREE.MeshStandardMaterial({ color: 0xFF9933 })
      const coffeeMaterial = new THREE.MeshStandardMaterial({ color: 0x3d1f0a })
      const creamMaterial = new THREE.MeshStandardMaterial({ color: 0xf5f5dc })
      
      const woodMaterial = new THREE.MeshStandardMaterial({ color: 0xC4956A })
      const tealMaterial = new THREE.MeshStandardMaterial({ color: 0x2D8B8B })
      const screenMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x111122, 
        emissive: 0x3366aa, 
        emissiveIntensity: 0.4 
      })
      const chairMaterial = new THREE.MeshStandardMaterial({ color: 0x8B4513 })
      const potMaterial = new THREE.MeshStandardMaterial({ color: 0x555555 })
      const plantMaterial = new THREE.MeshStandardMaterial({ color: 0x3d6b40 })

      // Ground shadow
      const shadowPlane = new THREE.Mesh(
        new THREE.PlaneGeometry(15, 15),
        new THREE.ShadowMaterial({ opacity: 0.25 })
      )
      shadowPlane.rotation.x = -Math.PI / 2
      shadowPlane.position.y = 0
      shadowPlane.receiveShadow = true
      scene.add(shadowPlane)

      // ============================================
      // === DESK (smaller) ===
      // ============================================
      const deskY = 1.2
      const deskTop = new THREE.Mesh(new THREE.BoxGeometry(2.8, 0.15, 1.6), woodMaterial)
      deskTop.position.set(0, deskY, 0)
      deskTop.castShadow = true
      deskTop.receiveShadow = true
      scene.add(deskTop)

      const deskLegGeom = new THREE.BoxGeometry(0.1, deskY, 0.1)
      ;[[-1.25, -0.65], [1.25, -0.65], [-1.25, 0.65], [1.25, 0.65]].forEach(([x, z]) => {
        const leg = new THREE.Mesh(deskLegGeom, woodMaterial)
        leg.position.set(x, deskY / 2, z)
        leg.castShadow = true
        scene.add(leg)
      })

      // ============================================
      // === LAPTOP (closer to Snoopy) ===
      // ============================================
      const laptopY = deskY + 0.08
      const laptopZ = 0.3 // Moved closer
      
      const laptopBase = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.08, 0.9), tealMaterial)
      laptopBase.position.set(0, laptopY + 0.04, laptopZ)
      laptopBase.castShadow = true
      scene.add(laptopBase)

      const keyboardBase = new THREE.Mesh(new THREE.BoxGeometry(1.2, 0.02, 0.7), darkGrayMaterial)
      keyboardBase.position.set(0, laptopY + 0.09, laptopZ + 0.05)
      scene.add(keyboardBase)

      const keyMaterial = new THREE.MeshStandardMaterial({ color: 0x222222 })
      for (let row = 0; row < 4; row++) {
        for (let col = 0; col < 10; col++) {
          const key = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.02, 0.09), keyMaterial)
          key.position.set(-0.5 + col * 0.11, laptopY + 0.11, laptopZ + 0.33 - row * 0.14)
          scene.add(key)
        }
      }

      const trackpad = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.01, 0.22), darkGrayMaterial)
      trackpad.position.set(0, laptopY + 0.1, laptopZ - 0.2)
      scene.add(trackpad)

      const laptopScreen = new THREE.Mesh(new THREE.BoxGeometry(1.4, 0.9, 0.05), tealMaterial)
      laptopScreen.position.set(0, laptopY + 0.5, laptopZ - 0.4)
      laptopScreen.rotation.x = 0.15
      laptopScreen.castShadow = true
      scene.add(laptopScreen)

      // Logo on laptop back (apple-like shape using boxes)
      const logoMaterial = new THREE.MeshStandardMaterial({ color: 0xaaaaaa })
      const logoBody = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.14, 0.02), logoMaterial)
      logoBody.position.set(0, laptopY + 0.52, laptopZ - 0.43)
      logoBody.rotation.x = 0.15
      scene.add(logoBody)
      
      const logoLeaf = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.06, 0.02), logoMaterial)
      logoLeaf.position.set(0.02, laptopY + 0.62, laptopZ - 0.44)
      logoLeaf.rotation.x = 0.15
      logoLeaf.rotation.z = 0.3
      scene.add(logoLeaf)

      const screenDisplay = new THREE.Mesh(new THREE.BoxGeometry(1.25, 0.75, 0.02), screenMaterial)
      screenDisplay.position.set(0, laptopY + 0.5, laptopZ - 0.38)
      screenDisplay.rotation.x = 0.15
      scene.add(screenDisplay)

      // Code lines on screen
      const codeMaterial = new THREE.MeshStandardMaterial({ color: 0x66ff66, emissive: 0x44aa44, emissiveIntensity: 0.5 })
      const codeLineMaterial = new THREE.MeshStandardMaterial({ color: 0x88aaff, emissive: 0x4466aa, emissiveIntensity: 0.3 })
      const commentMaterial = new THREE.MeshStandardMaterial({ color: 0x888888, emissive: 0x444444, emissiveIntensity: 0.2 })
      
      // Multiple code lines
      const codeLines = [
        { w: 0.3, x: -0.35, y: 0.25, mat: commentMaterial },
        { w: 0.5, x: -0.25, y: 0.18, mat: codeLineMaterial },
        { w: 0.4, x: -0.2, y: 0.11, mat: codeMaterial },
        { w: 0.6, x: -0.15, y: 0.04, mat: codeLineMaterial },
        { w: 0.35, x: -0.2, y: -0.03, mat: codeMaterial },
        { w: 0.45, x: -0.25, y: -0.1, mat: codeLineMaterial },
        { w: 0.3, x: -0.35, y: -0.17, mat: commentMaterial },
        { w: 0.55, x: -0.2, y: -0.24, mat: codeMaterial },
      ]
      
      codeLines.forEach(line => {
        const codeLine = new THREE.Mesh(
          new THREE.BoxGeometry(line.w, 0.04, 0.01),
          line.mat
        )
        codeLine.position.set(line.x, laptopY + 0.5 + line.y, laptopZ - 0.36)
        codeLine.rotation.x = 0.15
        scene.add(codeLine)
      })

      // ============================================
      // === CHAIR ===
      // ============================================
      const chairZ = 1.4
      const chairSeatY = 1.1
      
      // Seat
      const seat = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.1, 0.8), chairMaterial)
      seat.position.set(0, chairSeatY, chairZ)
      seat.castShadow = true
      scene.add(seat)

      // Chair back
      const chairBack = new THREE.Mesh(new THREE.BoxGeometry(0.9, 0.8, 0.08), chairMaterial)
      chairBack.position.set(0, chairSeatY + 0.45, chairZ + 0.36)
      chairBack.castShadow = true
      scene.add(chairBack)

      // Center pole (from seat down to base hub)
      const chairPole = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.8, 0.1), chairMaterial)
      chairPole.position.set(0, chairSeatY - 0.45, chairZ)
      chairPole.castShadow = true
      scene.add(chairPole)

      // Base hub (center of star) - at bottom of pole
      const baseHub = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.1, 0.2), chairMaterial)
      baseHub.position.set(0, 0.15, chairZ)
      scene.add(baseHub)

      // 5-star legs radiating from hub
      const legRadius = 0.4
      for (let i = 0; i < 5; i++) {
        const angle = (i / 5) * Math.PI * 2
        
        // Leg arm extending from center
        const legArm = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.06, 0.35), chairMaterial)
        const legX = Math.sin(angle) * (legRadius * 0.45)
        const legZ = Math.cos(angle) * (legRadius * 0.45)
        legArm.position.set(legX, 0.12, chairZ + legZ)
        legArm.rotation.y = angle
        scene.add(legArm)
        
        // Wheel at end of each leg
        const wheelX = Math.sin(angle) * legRadius
        const wheelZ = Math.cos(angle) * legRadius
        const wheel = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.1, 0.08), blackMaterial)
        wheel.position.set(wheelX, 0.08, chairZ + wheelZ)
        scene.add(wheel)
      }

      // ============================================
      // === PLANT POT ===
      // ============================================
      const potX = 1.1
      const potZ = -0.45
      const potY = deskY + 0.08
      
      const potBottom = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.12, 0.22), potMaterial)
      potBottom.position.set(potX, potY + 0.06, potZ)
      potBottom.castShadow = true
      scene.add(potBottom)
      
      const potMiddle = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.1, 0.26), potMaterial)
      potMiddle.position.set(potX, potY + 0.15, potZ)
      scene.add(potMiddle)
      
      const potTop = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.08, 0.3), potMaterial)
      potTop.position.set(potX, potY + 0.22, potZ)
      scene.add(potTop)
      
      const potRim = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.03, 0.32), potMaterial)
      potRim.position.set(potX, potY + 0.27, potZ)
      scene.add(potRim)
      
      const soilMaterial = new THREE.MeshStandardMaterial({ color: 0x3d2817 })
      const soil = new THREE.Mesh(new THREE.BoxGeometry(0.26, 0.03, 0.26), soilMaterial)
      soil.position.set(potX, potY + 0.25, potZ)
      scene.add(soil)

      const stem = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.3, 0.05), plantMaterial)
      stem.position.set(potX, potY + 0.42, potZ)
      scene.add(stem)

      const leaf1 = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.1, 0.04), plantMaterial)
      leaf1.position.set(potX + 0.08, potY + 0.47, potZ)
      leaf1.rotation.z = 0.5
      scene.add(leaf1)

      const leaf2 = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.1, 0.04), plantMaterial)
      leaf2.position.set(potX - 0.08, potY + 0.52, potZ)
      leaf2.rotation.z = -0.4
      scene.add(leaf2)

      // Flower
      const flowerCenter = new THREE.Mesh(
        new THREE.BoxGeometry(0.08, 0.08, 0.08),
        new THREE.MeshStandardMaterial({ color: 0xFFD700 })
      )
      flowerCenter.position.set(potX, potY + 0.62, potZ)
      scene.add(flowerCenter)

      const petalMaterial = new THREE.MeshStandardMaterial({ color: 0xFF69B4 })
      const petalPositions = [
        [0.08, 0, 0], [-0.08, 0, 0], [0, 0, 0.08], [0, 0, -0.08],
        [0.06, 0, 0.06], [-0.06, 0, 0.06], [0.06, 0, -0.06], [-0.06, 0, -0.06]
      ]
      petalPositions.forEach(([px, py, pz]) => {
        const petal = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.04, 0.06), petalMaterial)
        petal.position.set(potX + px, potY + 0.62 + py, potZ + pz)
        scene.add(petal)
      })

      // ============================================
      // === COFFEE MUG ===
      // ============================================
      const mugX = -1.0
      const mugZ = -0.4
      const mugY = deskY + 0.08
      
      const mugBase = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.05, 0.18), creamMaterial)
      mugBase.position.set(mugX, mugY + 0.025, mugZ)
      mugBase.castShadow = true
      scene.add(mugBase)
      
      const mugLower = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.1, 0.2), creamMaterial)
      mugLower.position.set(mugX, mugY + 0.1, mugZ)
      scene.add(mugLower)
      
      const mugMiddle = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.1, 0.22), creamMaterial)
      mugMiddle.position.set(mugX, mugY + 0.18, mugZ)
      scene.add(mugMiddle)
      
      const mugTopPart = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.08, 0.24), creamMaterial)
      mugTopPart.position.set(mugX, mugY + 0.26, mugZ)
      scene.add(mugTopPart)

      const coffee = new THREE.Mesh(new THREE.BoxGeometry(0.2, 0.03, 0.2), coffeeMaterial)
      coffee.position.set(mugX, mugY + 0.29, mugZ)
      scene.add(coffee)

      const handleTop = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.04, 0.06), creamMaterial)
      handleTop.position.set(mugX + 0.15, mugY + 0.24, mugZ)
      scene.add(handleTop)
      
      const handleMid = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.12, 0.06), creamMaterial)
      handleMid.position.set(mugX + 0.17, mugY + 0.16, mugZ)
      scene.add(handleMid)
      
      const handleBottom = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.04, 0.06), creamMaterial)
      handleBottom.position.set(mugX + 0.15, mugY + 0.1, mugZ)
      scene.add(handleBottom)

      // ============================================
      // === SNOOPY (proper proportions) ===
      // ============================================
      const snoopyGroup = new THREE.Group()

      // === BODY (rounder, proper Snoopy shape) ===
      const bodyMain = new THREE.Mesh(new THREE.BoxGeometry(0.55, 0.65, 0.5), whiteMaterial)
      bodyMain.position.set(0, 0.32, 0)
      bodyMain.castShadow = true
      snoopyGroup.add(bodyMain)

      // Belly front (rounded)
      const bellyFront = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.5, 0.2), whiteMaterial)
      bellyFront.position.set(0, 0.25, -0.28)
      snoopyGroup.add(bellyFront)

      // === COLLAR ===
      const collar = new THREE.Mesh(new THREE.BoxGeometry(0.58, 0.08, 0.52), redMaterial)
      collar.position.set(0, 0.62, 0)
      snoopyGroup.add(collar)

      // === HEAD (bigger, rounder) ===
      const head = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.55, 0.55), whiteMaterial)
      head.position.set(0, 1.0, 0)
      head.castShadow = true
      snoopyGroup.add(head)

      // Top of head
      const headTop = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.15, 0.45), whiteMaterial)
      headTop.position.set(0, 1.3, 0)
      snoopyGroup.add(headTop)

      // === SNOUT ===
      const snout = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.25, 0.45), whiteMaterial)
      snout.position.set(0, 0.82, -0.4)
      snout.castShadow = true
      snoopyGroup.add(snout)

      const snoutTip = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.2, 0.15), whiteMaterial)
      snoutTip.position.set(0, 0.8, -0.62)
      snoopyGroup.add(snoutTip)

      // Nose
      const nose = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.1, 0.08), blackMaterial)
      nose.position.set(0, 0.85, -0.7)
      snoopyGroup.add(nose)

      // Smile
      const smileLeft = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.025, 0.04), blackMaterial)
      smileLeft.position.set(0.06, 0.7, -0.55)
      smileLeft.rotation.z = -0.4
      snoopyGroup.add(smileLeft)
      
      const smileRight = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.025, 0.04), blackMaterial)
      smileRight.position.set(-0.06, 0.7, -0.55)
      smileRight.rotation.z = 0.4
      snoopyGroup.add(smileRight)
      
      const smileCenter = new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.025, 0.04), blackMaterial)
      smileCenter.position.set(0, 0.68, -0.55)
      snoopyGroup.add(smileCenter)

      // === EYES (on face, clearly visible) ===
      const eyeGeom = new THREE.BoxGeometry(0.1, 0.12, 0.06)
      const leftEye = new THREE.Mesh(eyeGeom, blackMaterial)
      leftEye.position.set(0.13, 1.05, -0.26)
      snoopyGroup.add(leftEye)

      const rightEye = new THREE.Mesh(eyeGeom, blackMaterial)
      rightEye.position.set(-0.13, 1.05, -0.26)
      snoopyGroup.add(rightEye)

      // === EARS ===
      const leftEarBase = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.12, 0.2), blackMaterial)
      leftEarBase.position.set(0.28, 1.2, 0.1)
      leftEarBase.rotation.z = -0.2
      leftEarBase.castShadow = true
      snoopyGroup.add(leftEarBase)

      const leftEarFlop = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.1, 0.16), blackMaterial)
      leftEarFlop.position.set(0.42, 1.05, 0.12)
      leftEarFlop.rotation.z = -0.7
      snoopyGroup.add(leftEarFlop)

      const rightEarBase = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.12, 0.2), blackMaterial)
      rightEarBase.position.set(-0.28, 1.2, 0.1)
      rightEarBase.rotation.z = 0.2
      rightEarBase.castShadow = true
      snoopyGroup.add(rightEarBase)

      const rightEarFlop = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.1, 0.16), blackMaterial)
      rightEarFlop.position.set(-0.42, 1.05, 0.12)
      rightEarFlop.rotation.z = 0.7
      snoopyGroup.add(rightEarFlop)

      // === ARMS (hovering above keyboard, typing) ===
      const leftArm = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.4, 0.12), whiteMaterial)
      leftArm.position.set(0.22, 0.35, -0.35)
      leftArm.rotation.x = -0.8
      leftArm.castShadow = true
      snoopyGroup.add(leftArm)

      const rightArm = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.4, 0.12), whiteMaterial)
      rightArm.position.set(-0.22, 0.35, -0.35)
      rightArm.rotation.x = -0.8
      rightArm.castShadow = true
      snoopyGroup.add(rightArm)

      // === LEGS (in front, hanging down from seat) ===
      // Thighs (horizontal, going forward from body)
      const leftThigh = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.12, 0.25), whiteMaterial)
      leftThigh.position.set(0.16, 0.0, -0.25)
      leftThigh.castShadow = true
      snoopyGroup.add(leftThigh)

      const rightThigh = new THREE.Mesh(new THREE.BoxGeometry(0.15, 0.12, 0.25), whiteMaterial)
      rightThigh.position.set(-0.16, 0.0, -0.25)
      rightThigh.castShadow = true
      snoopyGroup.add(rightThigh)

      // Lower legs (hanging down)
      const leftLeg = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.35, 0.12), whiteMaterial)
      leftLeg.position.set(0.16, -0.2, -0.35)
      leftLeg.castShadow = true
      snoopyGroup.add(leftLeg)

      const rightLeg = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.35, 0.12), whiteMaterial)
      rightLeg.position.set(-0.16, -0.2, -0.35)
      rightLeg.castShadow = true
      snoopyGroup.add(rightLeg)

      // Feet (at bottom of legs, pointing forward)
      const leftFoot = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.08, 0.22), whiteMaterial)
      leftFoot.position.set(0.16, -0.4, -0.4)
      leftFoot.castShadow = true
      snoopyGroup.add(leftFoot)

      const rightFoot = new THREE.Mesh(new THREE.BoxGeometry(0.14, 0.08, 0.22), whiteMaterial)
      rightFoot.position.set(-0.16, -0.4, -0.4)
      rightFoot.castShadow = true
      snoopyGroup.add(rightFoot)

      // Position Snoopy - sitting on chair
      snoopyGroup.position.set(0, chairSeatY + 0.05, chairZ - 0.2)
      scene.add(snoopyGroup)

      // ============================================
      // === WOODSTOCK ===
      // ============================================
      const woodstockGroup = new THREE.Group()

      const birdBody = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.28, 0.2), yellowMaterial)
      birdBody.position.set(0, 0, 0)
      birdBody.castShadow = true
      woodstockGroup.add(birdBody)

      const birdHead = new THREE.Mesh(new THREE.BoxGeometry(0.22, 0.22, 0.2), yellowMaterial)
      birdHead.position.set(0, 0.22, 0)
      birdHead.castShadow = true
      woodstockGroup.add(birdHead)

      const beak = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.05, 0.06), orangeMaterial)
      beak.position.set(0, 0.18, 0.13)
      woodstockGroup.add(beak)

      const eyeDotGeom = new THREE.BoxGeometry(0.04, 0.05, 0.03)
      const eyeL = new THREE.Mesh(eyeDotGeom, blackMaterial)
      eyeL.position.set(0.05, 0.26, 0.09)
      woodstockGroup.add(eyeL)

      const eyeR = new THREE.Mesh(eyeDotGeom, blackMaterial)
      eyeR.position.set(-0.05, 0.26, 0.09)
      woodstockGroup.add(eyeR)

      const featherGeom = new THREE.BoxGeometry(0.035, 0.14, 0.035)
      const feather1 = new THREE.Mesh(featherGeom, yellowMaterial)
      feather1.position.set(0, 0.38, 0)
      feather1.rotation.z = 0.3
      woodstockGroup.add(feather1)

      const feather2 = new THREE.Mesh(featherGeom, yellowMaterial)
      feather2.position.set(0.05, 0.36, 0)
      feather2.rotation.z = -0.2
      woodstockGroup.add(feather2)

      const feather3 = new THREE.Mesh(featherGeom, yellowMaterial)
      feather3.position.set(-0.05, 0.36, 0)
      feather3.rotation.z = 0.35
      woodstockGroup.add(feather3)

      const wingGeom = new THREE.BoxGeometry(0.05, 0.13, 0.07)
      const leftWing = new THREE.Mesh(wingGeom, yellowMaterial)
      leftWing.position.set(0.14, 0, 0)
      woodstockGroup.add(leftWing)

      const rightWing = new THREE.Mesh(wingGeom, yellowMaterial)
      rightWing.position.set(-0.14, 0, 0)
      woodstockGroup.add(rightWing)

      const birdFootGeom = new THREE.BoxGeometry(0.05, 0.03, 0.07)
      const birdLeftFoot = new THREE.Mesh(birdFootGeom, orangeMaterial)
      birdLeftFoot.position.set(0.04, -0.16, 0.02)
      woodstockGroup.add(birdLeftFoot)

      const birdRightFoot = new THREE.Mesh(birdFootGeom, orangeMaterial)
      birdRightFoot.position.set(-0.04, -0.16, 0.02)
      woodstockGroup.add(birdRightFoot)

      // Woodstock on desk next to laptop
      woodstockGroup.position.set(0.75, deskY + 0.24, 0.4)
      woodstockGroup.rotation.y = -0.5
      scene.add(woodstockGroup)

      setLoading(false)

      let req = null
      let frame = 0
      const animate = () => {
        req = requestAnimationFrame(animate)

        frame = frame <= 100 ? frame + 1 : frame

        if (frame <= 100) {
          const p = initialCameraPosition
          const rotSpeed = -easeOutCirc(frame / 120) * Math.PI * 20

          camera.position.y = 10
          camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed)
          camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed)
          camera.lookAt(target)
        } else {
          controls.update()
        }

        leftEarFlop.rotation.z = -0.7 + Math.sin(Date.now() * 0.003) * 0.08
        rightEarFlop.rotation.z = 0.7 - Math.sin(Date.now() * 0.003) * 0.08

        leftArm.rotation.x = -0.8 + Math.sin(Date.now() * 0.01) * 0.06
        rightArm.rotation.x = -0.8 + Math.sin(Date.now() * 0.01 + 0.5) * 0.06

        woodstockGroup.position.y = deskY + 0.24 + Math.sin(Date.now() * 0.005) * 0.04

        leftWing.rotation.z = Math.sin(Date.now() * 0.012) * 0.25
        rightWing.rotation.z = -Math.sin(Date.now() * 0.012) * 0.25

        feather1.rotation.z = 0.3 + Math.sin(Date.now() * 0.007) * 0.1
        feather2.rotation.z = -0.2 + Math.sin(Date.now() * 0.008) * 0.1
        feather3.rotation.z = 0.35 + Math.sin(Date.now() * 0.009) * 0.1

        screenMaterial.emissiveIntensity = 0.35 + Math.sin(Date.now() * 0.002) * 0.1

        renderer.render(scene, camera)
      }

      animate()

      window.addEventListener('resize', handleWindowResize, false)

      return () => {
        cancelAnimationFrame(req)
        window.removeEventListener('resize', handleWindowResize, false)
        renderer.domElement.remove()
        renderer.dispose()
      }
    }
  }, [handleWindowResize])

  return (
    <DogContainer ref={refContainer}>{loading && <DogSpinner />}</DogContainer>
  )
}

export default VoxelDog