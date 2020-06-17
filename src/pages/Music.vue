<template>
  <Layout>
    <main>
      <h2>Two claps</h2>
      <p>
        I like to record songs with my friends and I’ve had bands since my angsty teen years.
        Currently, I play bass for Alien Tango.
      </p>
      <p>
        <a
          class="font-sm"
          href="https://soundcloud.com/a133xz/sets"
          rel="noopener noreferrer"
          target="_blank"
          >Visit my Soundcloud</a
        ><br />
        <a
          class="font-sm"
          href="https://open.spotify.com/user/vblccrugbjuudv3ayg8n06h85?si=SAA_ts-cSYiuHAl0LVvFCA"
          rel="noopener noreferrer"
          target="_blank"
          >Listen to my Spotify playlists</a
        >
      </p>
      <section>
        <ul class="bands">
          <li v-for="(site, index) in bands" :key="index">
            <a :href="site.link" rel="noopener noreferrer" target="_blank">{{ site.name }}</a>
          </li>
        </ul>
      </section>
    </main>
  </Layout>
</template>

<script>
export default {
  name: "Music",
  metaInfo: {
    bodyAttrs: {
      style: "background-color: var(--brand-blue); color: var(--brand-white);",
    },
  },
  data: function() {
    return {
      bands: [
        {
          name: "Alien Tango",
          link: "https://open.spotify.com/artist/7tmmsYFyEytK0nqP3BQfxg?si=KT16SkJbSqGrEaYu1e4z9A",
        },
        {
          name: "500 Skies",
          link: "",
          when: "(1 EP, since 2019)",
        },
        {
          name: "The Nowes",
          link: "https://www.youtube.com/watch?v=icdtdicVjTQ",
        },
        {
          name: "LEONA",
          link: "https://soundcloud.com/a133xz/sets/leona-after-the-rehearshal",
        },
      ],
      friends: [
        {
          name: "Mala Cotton",
          link: "https://open.spotify.com/artist/17mQMqtiJVWFebnFbcHo8C?si=uanqlsLGR7eMMADFLZh2Wg",
        },
        {
          name: "Oso Peligro",
          link: "https://open.spotify.com/artist/04fmm92KI62SDiiwt9otSW?si=inHsTQU3SGGw6_VUVK_UvA",
        },
        {
          name: "Pang Lozano",
          link: "https://open.spotify.com/artist/0gsbwx5ITRwcc1OdtsKYfK?si=P1ob222yTJiqmHQPau1qTA",
        },
        {
          name: "PBSR",
          link: "https://open.spotify.com/artist/1hcR66sinceJiPFq2AgCGs?si=-BmCdAJORIyeJtkCbIqpdw",
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
::selection {
  background: var(--brand-black);
}
a {
  color: var(--brand-white);
  &:hover {
    background-color: var(--brand-black);
  }
}
section {
  a {
    font-weight: bold;
    font-size: 1.2rem;
  }
}
// Custom font size
.bands {
  margin-top: var(--spacer);
  li {
    &:first-child {
      a {
        font-size: 2rem;
      }
    }
  }
}
</style>
