<template>
  <div id="all">
    <div ref="webgl" class="gl">
      <div class="zi">
        <div class="item" @click="changePosition()">左侧场馆</div>
        <div class="item" @click="changePositionMiddle()">中间场馆</div>
        <div class="item" @click="changePositionRight()">右侧场馆</div>
        <div class="item" @click="changePositionAll()">回到总览</div>
      </div>
      <div v-show="isShow" class="">
        一层
      </div>
    </div>
  </div>
</template>
<script>
import * as THREE from "three";
import * as TWEEN from "tween";
import { GLTFLoader } from "../../../js/GLTFLoader.js";
import { OrbitControls } from "../../../js/OrbitControls.js";
export default {
  data() {
    return {
      isShow:"",
      scene: "",
      camera: "",
      light: "",
      renderer: "",
      controls: "",
      objectold: "",
      materialold: "",
      modelFinished: "",
      object: "",
    };
  },
  methods: {
    initRender() {
      console.log("haha");
      this.renderer = new THREE.WebGLRenderer({ antialias: true });
      this.$nextTick(() => {
        this.renderer.setSize(
          this.$refs["webgl"].clientWidth,
          this.$refs["webgl"].clientHeight
        );
        //告诉渲染器需要阴影效果
        this.renderer.setClearColor(0xffffff);
        // document.body.appendChild(renderer.domElement);
        // renderer.domElement.removeAttribute("tabIndex");
        this.renderer.domElement.style.outline = "none";
        this.$refs["webgl"].appendChild(this.renderer.domElement);
        // document.getElementById('webgl').unbind('tabIndex');
      });
    },
    animateCamera(current1, target1, current2, target2) {
      var positionVar = {
        x1: current1.x,
        y1: current1.y,
        z1: current1.z,
        x2: target1.x,
        y2: target1.y,
        z2: target1.z,
      };
      //关闭控制器
      this.controls.enabled = false;
      var tween = new TWEEN.Tween(positionVar);
      tween.to(
        {
          x1: current2.x,
          y1: current2.y,
          z1: current2.z,
          x2: target2.x,
          y2: target2.y,
          z2: target2.z,
        },
        5000
      );
      tween.onUpdate(() => {
        this.camera.position.x = positionVar.x1;
        this.camera.position.y = positionVar.y1;
        this.camera.position.z = positionVar.z1;
        this.controls.target.x = positionVar.x2;
        this.controls.target.y = positionVar.y2;
        this.controls.target.z = positionVar.z2;
        this.controls.update();
        tween.onComplete(() => {
          this.camera.lookAt(target2);
        });
        ///开启控制器
        this.controls.enabled = true;
      });
      tween.easing(TWEEN.Easing.Cubic.InOut);
      tween.start();
    },
    changePosition() {
      this.animateCamera(
        this.camera.position,
        this.controls.target,
        new THREE.Vector3(100, 60, -140),
        new THREE.Vector3(142, 0, -162)
      );
    },
    changePositionMiddle() {
      this.animateCamera(
        this.camera.position,
        this.controls.target,
        new THREE.Vector3(211, 15, -2),
        new THREE.Vector3(113, 17, -66)
      );
    },
    changePositionRight() {
      this.animateCamera(
        this.camera.position,
        this.controls.target,
        new THREE.Vector3(70, 15, 72),
        new THREE.Vector3(66, 8, 37)
      );
    },
    changePositionAll() {
      this.animateCamera(
        this.camera.position,
        this.controls.target,
        new THREE.Vector3(-100, 15, -70),
        new THREE.Vector3(80, 15, -70)
      );
    },
    clickModel(event) {
      var intersects = this.getIntersects(event);
      console.log(intersects);
      var worldVector = this.getWorldVector(event);
      if (!intersects || intersects.length == 0) {
        return;
      } else {
        if (intersects[0].object.name.indexOf("外墙") != -1) {
          this.animateCamera(
            this.camera.position,
            this.controls.target,
            new THREE.Vector3(-20, 10, 60),
            new THREE.Vector3(-20, 10, 0)
          );
        } else {
          if (intersects[0].object.name.indexOf("玻璃") != -1) {
            this.animateCamera(
              this.camera.position,
              this.controls.target,
              new THREE.Vector3(0, 10, 20),
              new THREE.Vector3(0, 10, -10)
            );
          }
        }
      }
    },
    getIntersects(event) {
      event.preventDefault();
      // 声明 raycaster 和 mouse 变量
      let canvas = document.getElementsByTagName("canvas")[0];
      // 获取鼠标点击的位置
      let getBoundingClientRect = canvas.getBoundingClientRect();
      /**
       * bottom: 563 元素下边到视窗上边的距离
       * height: 503 是元素自身的高
       * left: 280  元素左边到视窗左边的距离
       * right: 1903 元素右边到视窗左边的距离
       * top: 60 元素上边到视窗上边的距离
       * width: 1623 是元素自身的宽
       * x: 280
       * y: 60
       */
      // 屏幕坐标转标准设备坐标
      // 窗口左边到点击点的距离
      // console.log(event.clientX);
      // 视窗上边到点击点的距离
      // console.log(event.clientY);
      // canvas到窗口左边的距离
      // console.log(getBoundingClientRect.left);
      // canvas到窗口上边的距离
      // console.log(getBoundingClientRect.top);
      let x =
        ((event.clientX - getBoundingClientRect.left) / canvas.offsetWidth) *
          2 -
        1; // 标准设备横坐标
      let y =
        -((event.clientY - getBoundingClientRect.top) / canvas.offsetHeight) *
          2 +
        1; // 标准设备纵坐标
      // 标准设备坐标
      let standardVector = new THREE.Vector3(x, y, 0.5);
      // 标准设备坐标转世界坐标
      let worldVector = standardVector.unproject(this.camera);
      // 射线投射方向单位向量(worldVector坐标减相机位置坐标)
      let ray = worldVector.sub(this.camera.position).normalize();
      // 创建射线投射器对象
      let rayCaster = new THREE.Raycaster(this.camera.position, ray);
      rayCaster.camera = this.camera;
      // 返回射线选中的对象 第二个参数如果不填 默认是false
      let intersects = rayCaster.intersectObjects(this.scene.children, true);
      let o = new THREE.Vector3(0, 0, 0);
      // let arr = [];
      // arr = [intersects, worldVector];
      //返回选中的对象
      return intersects;
    },
    getWorldVector(event) {
      event.preventDefault();
      // 声明 raycaster 和 mouse 变量
      let canvas = document.getElementsByTagName("canvas")[0];
      // 获取鼠标点击的位置
      let getBoundingClientRect = canvas.getBoundingClientRect();
      let x =
        ((event.clientX - getBoundingClientRect.left) / canvas.offsetWidth) *
          2 -
        1; // 标准设备横坐标
      let y =
        -((event.clientY - getBoundingClientRect.top) / canvas.offsetHeight) *
          2 +
        1; // 标准设备纵坐标
      let standardVector = new THREE.Vector3(x, y, 0.5);
      let worldVector = standardVector.unproject(this.camera);
      return worldVector;
    },
    changeMaterial(object) {
      if (this.objectold && this.materialold) {
        this.objectold.material = this.materialold;
      }
      this.objectold = object;
      this.materialold = object.material;
      var material = new THREE.MeshLambertMaterial({
        color: 0x239fff,
        transparent: object.material.transparent ? false : true,
        opacity: 0.8,
      });
      object.material = material;
    },
    //还原材质
    changeMaterial1(object) {
      if (this.selectObject.name != this.objectold.name) {
        return;
      } else {
        object.material = this.materialold;
        this.scene.children.splice(3, 1);
      }
    },
    // 鼠标双击调用的函数
    adblclick(event) {
      var clickTimeId;
      // 取消上次延时未执行的方法
      clearTimeout(clickTimeId);
      var intersects = this.getIntersects(event);
      if (
        intersects.length != 0 &&
        (intersects[0].object.name == "Rectangle002" ||
          intersects[0].object.name == "Rectangle001")
      ) {
        this.selectObject = intersects[0].object;
        this.changeMaterial1(this.selectObject);
      }
    },
    initCamera() {
      this.camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      this.camera.position.set(-100, 15, -70);
      // this.camera.lookAt(new THREE.Vector3(0, 0, 0));

      //创建并设置大小
      var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);

      //设置颜色线框显示否
      var cubeMaterial = new THREE.MeshBasicMaterial({
        color: 0xff0000,
        wireframe: true,
      });
      var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      var cube1 = new THREE.Mesh(cubeGeometry, cubeMaterial);
      var cube2 = new THREE.Mesh(cubeGeometry, cubeMaterial);

      //设置cube的位置
      cube.position.x = -20;
      cube.position.y = 20;
      cube.position.z = 0;

      cube1.position.x = 80;
      cube1.position.y = 15;
      cube1.position.z = -70;

      cube2.position.x = 100;
      cube2.position.y = 15;
      cube2.position.z = -140;
      this.scene.add(cube);
      this.scene.add(cube1);
      this.scene.add(cube2)
    },
    initScene() {
      var axes = new THREE.AxisHelper(200);
      this.scene = new THREE.Scene();
      this.scene.add(axes);
    },
    initLight() {
      var pointColor = "0xffffff";
      var PointLight = new THREE.PointLight(pointColor);
      PointLight.position.set(50,15,-150);
      var PointLight1 = new THREE.PointLight(pointColor);
      PointLight1.position.set(150,15,-250);
      var directionalLight = new THREE.DirectionalLight(pointColor);
      directionalLight.intensity = 1;
      directionalLight.position.set(0, 1, 0);
      directionalLight.shadow.camera.near = 1; //产生阴影的最近距离
      directionalLight.shadow.camera.far = 400; //产生阴影的最远距离
      directionalLight.shadow.camera.left = -50; //产生阴影距离位置的最左边位置
      directionalLight.shadow.camera.right = 50; //最右边
      directionalLight.shadow.camera.top = 50; //最上边
      directionalLight.shadow.camera.bottom = -50; //最下面
      //这两个值决定生成阴影密度 默认512
      directionalLight.shadow.mapSize.height = 1024;
      directionalLight.shadow.mapSize.width = 1024;
      //告诉平行光需要开启阴影投射
      directionalLight.castShadow = true;
      this.light = new THREE.AmbientLight("#0c0c0c");
      this.scene.add(this.light);
      this.scene.add(directionalLight);
    },
    initModel() {
      console.log("haha");
      //辅助工具
      var helper = new THREE.AxesHelper(50);
      this.scene.add(helper);
      var loader = new GLTFLoader();
      loader.load("/static/models/obj/chuzhouaoti/滁州奥体.gltf", (gltf) => {
        gltf.scene.scale.set(0.5, 0.5, 0.5);
        this.scene.add(gltf.scene);
      });
    },
    initControls() {
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
      // 如果使用animate方法时，将此函数删除
      //controls.addEventListener( 'change', render );
      // 使动画循环使用时阻尼或自转 意思是否有惯性
      this.controls.enableDamping = true;
      //动态阻尼系数 就是鼠标拖拽旋转灵敏度
      this.controls.dampingFactor = 0.5;
      //上下翻转的最大角度
      this.controls.maxPolarAngle = Math.PI / 2;
      //上下翻转的最小角度
      this.controls.minPolarAngle = 0;
      //是否可以缩放
      this.controls.enableZoom = true;
      //是否自动旋转
      // this.controls.autoRotate = true;
      //设置相机距离原点的最远距离
      this.controls.minDistance = 1;
      //设置相机距离原点的最远距离
      this.controls.maxDistance = 200;
      //是否开启右键拖拽
      this.controls.enablePan = true;
      this.controls.target = new THREE.Vector3(80, 15, -70);
    },
    addSprite(intersects) {
      this.scene.children.splice(3, 1);

      this.selectObject = intersects[0].object;
      this.changeMaterial(this.selectObject);
      /**sprite方式 */
      const cloneObj = {
        name: "18层",
        count: "300人",
      };
      const sprite = this.createSprite(cloneObj);
      sprite.position.set(
        intersects[0].point.x - 16,
        intersects[0].point.y + 4,
        intersects[0].point.z
      );
      this.scene.add(sprite);
      if (intersects.length) {
        const res = intersects.filter((res) => res && res.object)[0];
        if (res && res.object && res.object.parent.$data) {
          //是否为绑定了自定义数据的模型
          res.object.material.color.set(0xff0000);
        }
      }
    },
    //窗口变动触发的函数
    onWindowResize() {
      this.camera.aspect =
        this.$refs["webgl"].clientWidth / this.$refs["webgl"].clientHeight;
      this.camera.updateProjectionMatrix();
      this.render();
      this.renderer.setSize(
        this.$refs["webgl"].clientWidth,
        this.$refs["webgl"].clientHeight
      );
    },
    render() {
      this.renderer.render(this.scene, this.camera);
    },
    animate() {
      //更新控制器
      this.render();
      //更新性能插件
      // stats.update();
      TWEEN.update();
      this.controls.update();
      requestAnimationFrame(this.animate);
    },
    mouseMove() {},
    draw() {
      this.initRender();
      this.initScene();
      this.initCamera();
      this.initLight();
      this.initModel();
      this.initControls();
      this.animate();
      window.onresize = this.onWindowResize;
      window.addEventListener("click", this.clickModel, false);
    },
  },
  created() {
    this.draw();
  }
};
</script>
 

<style lang='scss'>
#all {
  height: 100%;
  .gl {
    height: 100%;
    position: relative;
    .zi {
      position: absolute;
      bottom: 0px;
      left: 0px;
      display: flex;
      color: #ffffff;
      .item {
        text-align: center;
        border: 1px solid #337AB7;
        border-bottom: none;
        border-right: none;
        height: 30px;
        line-height: 30px;
        flex: 1;
        width: 100%;
        z-index: 0;
        padding-left: 30px;
        padding-right: 30px;
      }
      .item:last-child {
        border-right: 1px solid #337AB7;
      }
      .item:hover {
        cursor: pointer;
        background-color: #337AB7;
        z-index: 1;
      }
    }
  }
}
</style>
