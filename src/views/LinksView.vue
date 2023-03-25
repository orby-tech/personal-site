<script setup lang="ts">
import github from "./../assets/GitHub-512.png";
import email from "./../assets/email.png";
import telegram from "./../assets/telegram.png";
import linkedin from "./../assets/linkedin.png";
import { ElMessage } from "element-plus";


const links = [
  {
    href: "https://github.com/orby-tech",
    image: github,
  },
  {
    href: "https://t.me/orby_tech",
    image: telegram,
  },
  {
    href: "mailto:tibode495@gmail.com",
    image: email,
  }, {
    href: "https://www.linkedin.com/in/timur-bondarenko-2625801a6",
    image: linkedin,
  },
];

const adresses = [
  {
    title: "Telegram",
    adress: "@orby_tech",
    image: telegram,
  },
  {
    title: "Email",
    adress: "tibode495@gmail.com",
    image: email,
  },
];
function fallbackCopyTextToClipboard(text: string) {
  const textArea = document.createElement("textarea");
  textArea.value = text;

  // Avoid scrolling to bottom
  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand("copy");
    const msg = successful ? "successful" : "unsuccessful";
    if (successful) {
      ElMessage(`${text} was copied to clipboard`);
    } else {
      ElMessage("Fallback: Oops, unable to copy");
    }
  } catch (err) {
    ElMessage("Fallback: Oops, unable to copy");
  }

  document.body.removeChild(textArea);
}

function copyTextToClipboard(text: string) {
  if (!navigator.clipboard) {
    fallbackCopyTextToClipboard(text);
    return;
  }
  navigator.clipboard.writeText(text).then(
    function () {
      ElMessage(`${text} was copied to clipboard`);
    },
    function (err) {
      ElMessage("Fallback: Oops, unable to copy");
    }
  );
}

const addressClick = (adress: string) => {
  copyTextToClipboard(adress);
};
</script>

<template>
  <main>
    <div class="container">
      <span>{{ $t("links.goto") }}:</span>
      <div v-for="link in links" :key="link.href" class="links-container">
        <el-link :href="link.href" :underline="false">
          <el-avatar :src="link.image" />
        </el-link>
      </div>
    </div>
    <div class="container">
      <span>{{ $t("links.copy") }}:</span>
      <div class="links-container">
        <div v-for="adress in adresses" :key="adress.adress" class="text item">
          <el-popover
            placement="top-start"
            :title="adress.title"
            :width="200"
            trigger="hover"
            :content="adress.adress"
          >
            <template #reference>
              <el-avatar
                :src="adress.image"
                @click="() => addressClick(adress.adress)"
              />
            </template>
          </el-popover>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
main {
  display: flex;
  gap: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.container {
  display: flex;

  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
}

.links-container {
  display: flex;
  gap: 10px;
}

.el-avatar {
  transform: scale(1);
  transition: transform 0.5s;
}
.el-avatar:hover {
  transform: scale(1.5);
}
</style>
