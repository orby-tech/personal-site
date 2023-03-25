<script setup lang="ts">
import vagratnt from "./../assets/vagrant.png";
import instagram from "./../assets/instagram.png";
import anki from "./../assets/anki.png";
import piHole from "./../assets/pi-hole.png";
import navidrome from "./../assets/navidrome.png";
import wireguard from "./../assets/wireguard.png";

const recomendations = [
  {
    title: "Vagrant",
    description: "",
    href: "https://www.vagrantup.com/",
    image: vagratnt,
  },
  {
    title: "My wife's instagram",
    description: "",
    href: "https://www.instagram.com/liligimadut",
    image: instagram,
  },  {
    title: "Anki cards",
    description: "Program to learn cards",
    href: "https://apps.ankiweb.net/",
    image: anki,
  }, {
    title: "Pi-hole",
    description: "Your DNS resolver",
    href: "https://pi-hole.net/",
    image: piHole,
  },
  {
    title: "Navidrome",
    description: "Your Personal Music Streaming Service",
    href: "https://www.navidrome.org/",
    image: navidrome,
  },
  {
    title: "Wireguard",
    description: "Your Personal VPN service",
    href: "https://www.wireguard.com/",
    image: wireguard,
  },
];
</script>

<template>
  <main>
    <ul class="honeycomb" lang="es">
      <li
        class="honeycomb-cell"
        v-for="recomendation in recomendations"
        :key="recomendation.href"
      >
        <el-popover
          placement="top-start"
          :title="recomendation.title"
          :width="200"
          trigger="hover"
          :content="recomendation.description"
        >
          <template #reference>
            <el-link
              :href="recomendation.href"
              :underline="false"
              class="honeycomb-cell__image"
            >
              <img :src="recomendation.image" class="honeycomb-cell__image" />
            </el-link>
          </template>
        </el-popover>
      </li>
    </ul>
  </main>
</template>

<style scoped lang="scss">
main {
  // min-height: 100vh;
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

$hexagon-width: 50px;
$hexagon-height: $hexagon-width * 0.55;
$hexagon-margin: 20px;
$hexagon-title-color: #fff;
$hexagon-border-color: #fff;
$hexagon-border-color--hover: #72f88e;
$hexagon-image-color: #3ea0eb;
$honeycomb-max-width: 100%;
$viewport-thereshold: $hexagon-width + $hexagon-margin;
$sin60: 0.86602540378;
$cos60: 0.5;
$paddingX: 1;

.honeycomb {
  list-style: none;
  width: $honeycomb-max-width;

  margin: 0 auto;
  padding: 0;

  &-cell {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    z-index: 1;
    flex-wrap: wrap;

    &__image {
      object-fit: cover;
      object-position: center;
    }

    &__image {
      top: 50%;
      left: 50%;
      width: $hexagon-width;
      height: 2 * $hexagon-height;
      display: block;
      position: absolute;
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      transform: translate(-50%, -50%);
      z-index: -1;
      background-color: #eeffe74d;
    }

    &:hover {
      .honeycomb-cell__title {
        opacity: 0;
      }
    }
  }

  &__placeholder {
    display: none;
    opacity: 0;
    width: $hexagon-width;
    margin: 0 calc($hexagon-margin / 2);
  }
}

.honeycomb-cell:nth-child(2) > a {
  transform: translate(
    calc(-50% - $hexagon-width / 2),
    calc(-50% + $hexagon-width * $sin60)
  );
}
.honeycomb-cell:nth-child(3) > a {
  transform: translate(
    calc(-50% + $hexagon-width / 2),
    calc(-50% + $hexagon-width * $sin60)
  );
}
.honeycomb-cell:nth-child(4) > a {
  transform: translate(50%, -50%);
}
.honeycomb-cell:nth-child(5) > a {
  transform: translate(
    calc(-50% + $hexagon-width / 2),
    calc(-50% - $hexagon-width * $sin60)
  );
}
.honeycomb-cell:nth-child(6) > a {
  transform: translate(
    calc(-50% - $hexagon-width / 2),
    calc(-50% - $hexagon-width * $sin60)
  );
}
.honeycomb-cell:nth-child(7) > a {
  transform: translate(-150%, -50%);
}
</style>
