import { useState } from "react";
import DeezerList from "./DeezerList";

const deezerDataTemp = [
  {
    id: 1432930542,
    title: "Where Are You Now",
    title_short: "Where Are You Now",
    title_version: "",
    link: "https://www.deezer.com/track/1432930542",
    duration: 148,
    rank: 980523,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-4.dzcdn.net/stream/c-4dbc273925e6605c5ee6d89c59be1e2b-3.mp3",
    md5_image: "a7fb466d3186650ced59307edcf0306f",
    position: 1,
    artist: {
      id: 5866223,
      name: "Lost Frequencies",
      link: "https://www.deezer.com/artist/5866223",
      picture: "https://api.deezer.com/artist/5866223/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/5876cafffe21256efdaf47fca19a2694/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/5876cafffe21256efdaf47fca19a2694/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/5876cafffe21256efdaf47fca19a2694/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/5876cafffe21256efdaf47fca19a2694/1000x1000-000000-80-0-0.jpg",
      radio: true,
      tracklist: "https://api.deezer.com/artist/5866223/top?limit=50",
      type: "artist",
    },
    album: {
      id: 244103182,
      title: "Where Are You Now",
      cover: "https://api.deezer.com/album/244103182/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/a7fb466d3186650ced59307edcf0306f/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/a7fb466d3186650ced59307edcf0306f/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/a7fb466d3186650ced59307edcf0306f/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/a7fb466d3186650ced59307edcf0306f/1000x1000-000000-80-0-0.jpg",
      md5_image: "a7fb466d3186650ced59307edcf0306f",
      tracklist: "https://api.deezer.com/album/244103182/tracks",
      type: "album",
    },
    type: "track",
  },
  {
    id: 1765270907,
    title: "Potion",
    title_short: "Potion",
    title_version: "",
    link: "https://www.deezer.com/track/1765270907",
    duration: 214,
    rank: 982638,
    explicit_lyrics: true,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-b.dzcdn.net/stream/c-b8d913966321e680e7bf7f41e5895e1a-3.mp3",
    md5_image: "f8f0ef7ebb5cd8cea80d1c9ceabbdb9a",
    position: 2,
    artist: {
      id: 12178,
      name: "Calvin Harris",
      link: "https://www.deezer.com/artist/12178",
      picture: "https://api.deezer.com/artist/12178/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/566c5a0826b2981a396850ad6ab54429/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/566c5a0826b2981a396850ad6ab54429/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/566c5a0826b2981a396850ad6ab54429/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/566c5a0826b2981a396850ad6ab54429/1000x1000-000000-80-0-0.jpg",
      radio: true,
      tracklist: "https://api.deezer.com/artist/12178/top?limit=50",
      type: "artist",
    },
    album: {
      id: 321660907,
      title: "Potion",
      cover: "https://api.deezer.com/album/321660907/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/f8f0ef7ebb5cd8cea80d1c9ceabbdb9a/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/f8f0ef7ebb5cd8cea80d1c9ceabbdb9a/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/f8f0ef7ebb5cd8cea80d1c9ceabbdb9a/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/f8f0ef7ebb5cd8cea80d1c9ceabbdb9a/1000x1000-000000-80-0-0.jpg",
      md5_image: "f8f0ef7ebb5cd8cea80d1c9ceabbdb9a",
      tracklist: "https://api.deezer.com/album/321660907/tracks",
      type: "album",
    },
    type: "track",
  },
  {
    id: 1785220827,
    title: "Tango",
    title_short: "Tango",
    title_version: "",
    link: "https://www.deezer.com/track/1785220827",
    duration: 168,
    rank: 879999,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-7.dzcdn.net/stream/c-75f25aed46d319f4d909337fbd9d620e-3.mp3",
    md5_image: "24d49b4a376aa1d807e7dcbcff1e8da1",
    position: 3,
    artist: {
      id: 65699042,
      name: "Voyage",
      link: "https://www.deezer.com/artist/65699042",
      picture: "https://api.deezer.com/artist/65699042/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/a78d3a2f5bfadeef93ab7575d4969245/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/a78d3a2f5bfadeef93ab7575d4969245/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/a78d3a2f5bfadeef93ab7575d4969245/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/a78d3a2f5bfadeef93ab7575d4969245/1000x1000-000000-80-0-0.jpg",
      radio: true,
      tracklist: "https://api.deezer.com/artist/65699042/top?limit=50",
      type: "artist",
    },
    album: {
      id: 326038367,
      title: "Tango",
      cover: "https://api.deezer.com/album/326038367/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/24d49b4a376aa1d807e7dcbcff1e8da1/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/24d49b4a376aa1d807e7dcbcff1e8da1/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/24d49b4a376aa1d807e7dcbcff1e8da1/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/24d49b4a376aa1d807e7dcbcff1e8da1/1000x1000-000000-80-0-0.jpg",
      md5_image: "24d49b4a376aa1d807e7dcbcff1e8da1",
      tracklist: "https://api.deezer.com/album/326038367/tracks",
      type: "album",
    },
    type: "track",
  },
  {
    id: 1714624177,
    title: "Provereno",
    title_short: "Provereno",
    title_version: "",
    link: "https://www.deezer.com/track/1714624177",
    duration: 213,
    rank: 843851,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-6.dzcdn.net/stream/c-6a727a13586b7451c2aaeae9beeed360-3.mp3",
    md5_image: "279540535ceb527534d79e7a24645fb2",
    position: 4,
    artist: {
      id: 4075432,
      name: "Milica Pavlovic",
      link: "https://www.deezer.com/artist/4075432",
      picture: "https://api.deezer.com/artist/4075432/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/a1824969ade2b6016431424ac2225655/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/a1824969ade2b6016431424ac2225655/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/a1824969ade2b6016431424ac2225655/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/a1824969ade2b6016431424ac2225655/1000x1000-000000-80-0-0.jpg",
      radio: true,
      tracklist: "https://api.deezer.com/artist/4075432/top?limit=50",
      type: "artist",
    },
    album: {
      id: 309732517,
      title: "Posesivna",
      cover: "https://api.deezer.com/album/309732517/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/279540535ceb527534d79e7a24645fb2/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/279540535ceb527534d79e7a24645fb2/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/279540535ceb527534d79e7a24645fb2/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/279540535ceb527534d79e7a24645fb2/1000x1000-000000-80-0-0.jpg",
      md5_image: "279540535ceb527534d79e7a24645fb2",
      tracklist: "https://api.deezer.com/album/309732517/tracks",
      type: "album",
    },
    type: "track",
  },
  {
    id: 1810802927,
    title: "Martini",
    title_short: "Martini",
    title_version: "",
    link: "https://www.deezer.com/track/1810802927",
    duration: 127,
    rank: 897657,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-b.dzcdn.net/stream/c-b21f51c1e50ee9a7eb1d4375e2b780f2-3.mp3",
    md5_image: "e7903a2e4fa3b4f194b118a9b35323d5",
    position: 5,
    artist: {
      id: 957281,
      name: "Henny",
      link: "https://www.deezer.com/artist/957281",
      picture: "https://api.deezer.com/artist/957281/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/922c62275c9d1f116b830a4201759ab4/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/922c62275c9d1f116b830a4201759ab4/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/922c62275c9d1f116b830a4201759ab4/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/922c62275c9d1f116b830a4201759ab4/1000x1000-000000-80-0-0.jpg",
      radio: true,
      tracklist: "https://api.deezer.com/artist/957281/top?limit=50",
      type: "artist",
    },
    album: {
      id: 332178247,
      title: "Martini",
      cover: "https://api.deezer.com/album/332178247/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/e7903a2e4fa3b4f194b118a9b35323d5/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/e7903a2e4fa3b4f194b118a9b35323d5/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/e7903a2e4fa3b4f194b118a9b35323d5/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/e7903a2e4fa3b4f194b118a9b35323d5/1000x1000-000000-80-0-0.jpg",
      md5_image: "e7903a2e4fa3b4f194b118a9b35323d5",
      tracklist: "https://api.deezer.com/album/332178247/tracks",
      type: "album",
    },
    type: "track",
  },
  {
    id: 1714624147,
    title: "Seceru",
    title_short: "Seceru",
    title_version: "",
    link: "https://www.deezer.com/track/1714624147",
    duration: 196,
    rank: 808507,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-f.dzcdn.net/stream/c-ff3fab2760468ff507f0b2eebac44bdb-3.mp3",
    md5_image: "279540535ceb527534d79e7a24645fb2",
    position: 6,
    artist: {
      id: 4075432,
      name: "Milica Pavlovic",
      link: "https://www.deezer.com/artist/4075432",
      picture: "https://api.deezer.com/artist/4075432/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/a1824969ade2b6016431424ac2225655/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/a1824969ade2b6016431424ac2225655/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/a1824969ade2b6016431424ac2225655/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/a1824969ade2b6016431424ac2225655/1000x1000-000000-80-0-0.jpg",
      radio: true,
      tracklist: "https://api.deezer.com/artist/4075432/top?limit=50",
      type: "artist",
    },
    album: {
      id: 309732517,
      title: "Posesivna",
      cover: "https://api.deezer.com/album/309732517/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/279540535ceb527534d79e7a24645fb2/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/279540535ceb527534d79e7a24645fb2/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/279540535ceb527534d79e7a24645fb2/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/279540535ceb527534d79e7a24645fb2/1000x1000-000000-80-0-0.jpg",
      md5_image: "279540535ceb527534d79e7a24645fb2",
      tracklist: "https://api.deezer.com/album/309732517/tracks",
      type: "album",
    },
    type: "track",
  },
  {
    id: 1725853207,
    title: "Omadjijala",
    title_short: "Omadjijala",
    title_version: "",
    link: "https://www.deezer.com/track/1725853207",
    duration: 167,
    rank: 832126,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-a.dzcdn.net/stream/c-ae99a8ae322aff355c02b73b9c396a74-3.mp3",
    md5_image: "6d55c4461cd2b5bd5fe8328fec0fb1e4",
    position: 7,
    artist: {
      id: 1382249,
      name: "Devito",
      link: "https://www.deezer.com/artist/1382249",
      picture: "https://api.deezer.com/artist/1382249/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/43af033c92f0edb0f5f413115739491d/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/43af033c92f0edb0f5f413115739491d/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/43af033c92f0edb0f5f413115739491d/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/43af033c92f0edb0f5f413115739491d/1000x1000-000000-80-0-0.jpg",
      radio: true,
      tracklist: "https://api.deezer.com/artist/1382249/top?limit=50",
      type: "artist",
    },
    album: {
      id: 312294867,
      title: "Omadjijala",
      cover: "https://api.deezer.com/album/312294867/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/6d55c4461cd2b5bd5fe8328fec0fb1e4/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/6d55c4461cd2b5bd5fe8328fec0fb1e4/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/6d55c4461cd2b5bd5fe8328fec0fb1e4/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/6d55c4461cd2b5bd5fe8328fec0fb1e4/1000x1000-000000-80-0-0.jpg",
      md5_image: "6d55c4461cd2b5bd5fe8328fec0fb1e4",
      tracklist: "https://api.deezer.com/album/312294867/tracks",
      type: "album",
    },
    type: "track",
  },
  {
    id: 1411181832,
    title: "Pepas",
    title_short: "Pepas",
    title_version: "",
    link: "https://www.deezer.com/track/1411181832",
    duration: 287,
    rank: 995143,
    explicit_lyrics: true,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-6.dzcdn.net/stream/c-69b1f3a13ff3868d14e4d210c2031067-3.mp3",
    md5_image: "1b88acc901e3beff139b5b4eea025802",
    position: 8,
    artist: {
      id: 614223,
      name: "Farruko",
      link: "https://www.deezer.com/artist/614223",
      picture: "https://api.deezer.com/artist/614223/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/51c65365890c822f4b67a0fdd77e1f90/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/51c65365890c822f4b67a0fdd77e1f90/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/51c65365890c822f4b67a0fdd77e1f90/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/51c65365890c822f4b67a0fdd77e1f90/1000x1000-000000-80-0-0.jpg",
      radio: true,
      tracklist: "https://api.deezer.com/artist/614223/top?limit=50",
      type: "artist",
    },
    album: {
      id: 238972342,
      title: "Pepas",
      cover: "https://api.deezer.com/album/238972342/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/1b88acc901e3beff139b5b4eea025802/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/1b88acc901e3beff139b5b4eea025802/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/1b88acc901e3beff139b5b4eea025802/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/1b88acc901e3beff139b5b4eea025802/1000x1000-000000-80-0-0.jpg",
      md5_image: "1b88acc901e3beff139b5b4eea025802",
      tracklist: "https://api.deezer.com/album/238972342/tracks",
      type: "album",
    },
    type: "track",
  },
  {
    id: 142706538,
    title: "Something Just Like This",
    title_short: "Something Just Like This",
    title_version: "",
    link: "https://www.deezer.com/track/142706538",
    duration: 247,
    rank: 934499,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-c.dzcdn.net/stream/c-c7f32280916bc10e989ca5f4ed3b8afb-7.mp3",
    md5_image: "2ae6c01a51296a7ec6d89c96a4fac32c",
    position: 9,
    artist: {
      id: 892,
      name: "Coldplay",
      link: "https://www.deezer.com/artist/892",
      picture: "https://api.deezer.com/artist/892/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/e65d62ecd00b8bf1ba89073943ac62a1/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/e65d62ecd00b8bf1ba89073943ac62a1/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/e65d62ecd00b8bf1ba89073943ac62a1/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/e65d62ecd00b8bf1ba89073943ac62a1/1000x1000-000000-80-0-0.jpg",
      radio: true,
      tracklist: "https://api.deezer.com/artist/892/top?limit=50",
      type: "artist",
    },
    album: {
      id: 15438310,
      title: "Something Just Like This",
      cover: "https://api.deezer.com/album/15438310/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/2ae6c01a51296a7ec6d89c96a4fac32c/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/2ae6c01a51296a7ec6d89c96a4fac32c/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/2ae6c01a51296a7ec6d89c96a4fac32c/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/2ae6c01a51296a7ec6d89c96a4fac32c/1000x1000-000000-80-0-0.jpg",
      md5_image: "2ae6c01a51296a7ec6d89c96a4fac32c",
      tracklist: "https://api.deezer.com/album/15438310/tracks",
      type: "album",
    },
    type: "track",
  },
  {
    id: 1797297127,
    title: "BREAK MY SOUL",
    title_short: "BREAK MY SOUL",
    title_version: "",
    link: "https://www.deezer.com/track/1797297127",
    duration: 278,
    rank: 999000,
    explicit_lyrics: false,
    explicit_content_lyrics: 0,
    explicit_content_cover: 0,
    preview:
      "https://cdns-preview-1.dzcdn.net/stream/c-1ca9ddf7e90a3eb1eb895142d3f9c1fd-6.mp3",
    md5_image: "06be28c0e33aeae38935f54565fec264",
    position: 10,
    artist: {
      id: 145,
      name: "Beyoncé",
      link: "https://www.deezer.com/artist/145",
      picture: "https://api.deezer.com/artist/145/image",
      picture_small:
        "https://e-cdns-images.dzcdn.net/images/artist/6203637647172f2323ce340c24219d39/56x56-000000-80-0-0.jpg",
      picture_medium:
        "https://e-cdns-images.dzcdn.net/images/artist/6203637647172f2323ce340c24219d39/250x250-000000-80-0-0.jpg",
      picture_big:
        "https://e-cdns-images.dzcdn.net/images/artist/6203637647172f2323ce340c24219d39/500x500-000000-80-0-0.jpg",
      picture_xl:
        "https://e-cdns-images.dzcdn.net/images/artist/6203637647172f2323ce340c24219d39/1000x1000-000000-80-0-0.jpg",
      radio: true,
      tracklist: "https://api.deezer.com/artist/145/top?limit=50",
      type: "artist",
    },
    album: {
      id: 328981167,
      title: "BREAK MY SOUL",
      cover: "https://api.deezer.com/album/328981167/image",
      cover_small:
        "https://e-cdns-images.dzcdn.net/images/cover/06be28c0e33aeae38935f54565fec264/56x56-000000-80-0-0.jpg",
      cover_medium:
        "https://e-cdns-images.dzcdn.net/images/cover/06be28c0e33aeae38935f54565fec264/250x250-000000-80-0-0.jpg",
      cover_big:
        "https://e-cdns-images.dzcdn.net/images/cover/06be28c0e33aeae38935f54565fec264/500x500-000000-80-0-0.jpg",
      cover_xl:
        "https://e-cdns-images.dzcdn.net/images/cover/06be28c0e33aeae38935f54565fec264/1000x1000-000000-80-0-0.jpg",
      md5_image: "06be28c0e33aeae38935f54565fec264",
      tracklist: "https://api.deezer.com/album/328981167/tracks",
      type: "album",
    },
    type: "track",
  },
];

const Deezer = function () {
  const [deezerData] = useState(deezerDataTemp);
  // useEffect(() => {
  //   const fetchData = async function () {
  //     const response = await fetch(
  //       "https://cors-anywhere.herokuapp.com/api.deezer.com/chart"
  //     );

  //     if (!response.ok) {
  //       throw new Error("Something went wrong");
  //     }
  //     const data = await response.json();

  //     setDeezerData(data.tracks.data);
  //   };

  //   fetchData().catch((err) => {
  //     console.log(err.message);
  //   });
  // }, []);

  return <DeezerList data={deezerData}></DeezerList>;
};

export default Deezer;
