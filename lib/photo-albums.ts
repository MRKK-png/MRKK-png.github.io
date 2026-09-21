export type AlbumPhoto = { id: string; src: string; alt: string; video?: string };
export type PhotoAlbum = { id: string; number: string; title: string; english: string; cover: string; photos: AlbumPhoto[] };
const asset = '/assets/photo/';
export const photoAlbums: PhotoAlbum[] = [
  { id: 'autumn-2025', number: '01', title: '2025 秋季学期总结', english: 'AUTUMN SEMESTER / 2025', cover: asset + 'autumn-01.webp', photos: [
    { id: 'autumn-01', alt: '校园庭院与早期电脑播放器窗口的拼贴' },
    { id: 'autumn-02', alt: '展览、画图软件窗口与日常片段的拼贴' },
    { id: 'autumn-03', alt: '工作台、朋友合影与设计片段的拼贴' },
    { id: 'autumn-04', alt: '朋友与节日聚会的拼贴' },
    { id: 'autumn-05', alt: '城市夜景、洋红播放器与日常片段的拼贴' },
    { id: 'autumn-06', alt: '人物、活动与桌面窗口的拼贴' },
    { id: 'autumn-07', alt: '舞蹈、灯光与摄像机的拼贴' },
  ].map(p => ({ ...p, src: asset + p.id + '.webp', video: asset + p.id + '.m4v' })) },
  { id: 'greenland', number: '02', title: '格陵兰暑期学校', english: 'GREENLAND / SUMMER SCHOOL', cover: asset + 'IMG_4003.webp', photos: [
    { id: 'IMG_3561', alt: '木栈道上的人物，身后是冰山与苔原' },
    { id: 'IMG_3705', alt: '岩石之间望向布满浮冰的海湾' },
    { id: 'IMG_3752', alt: '岩石地貌上的长条建筑' },
    { id: 'IMG_3839', alt: '成排彩色箱子下的港口工作场景' },
    { id: 'IMG_4003', alt: '静水中的冰山与一艘红色小船' },
    { id: 'IMG_4083', alt: '船上两人观察一块冰' },
    { id: 'IMG_4130', alt: '暮色中被粉色光线照亮的冰山' },
    { id: 'IMG_5149', alt: '黄色建筑边缘与岩石上的人物' },
    { id: 'IMG_5598', alt: '山谷草地与远山' },
  ].map(p => ({ ...p, src: asset + p.id + '.webp' })) },
  { id: 'everyday-specimens', number: '03', title: '日常标本', english: 'EVERYDAY SPECIMENS / 2025–2026', cover: asset + 'hk-06.webp', photos: [
    { id: 'hk-01', alt: '彩色游乐场边的儿童与沙地' },
    { id: 'hk-02', alt: '玻璃天棚下的城市公共空间' },
    { id: 'hk-03', alt: '手中展开的彩色印刷物与街道背景' },
    { id: 'hk-04', alt: '室内陈列中的民俗狮头与织物' },
    { id: 'hk-05', alt: '彩色民俗物件的局部记录' },
    { id: 'hk-06', alt: '展柜中的深红色传统服装' },
    { id: 'hk-07', alt: '并置陈列的传统服装与织物细节' },
    { id: 'hk-08', alt: '被建筑围合的城市庭院与行人' },
  ].map(p => ({ ...p, src: asset + p.id + '.webp' })) },
];
