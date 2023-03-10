import '@/components/NewsList/index.scss';
import listWrapper from '@/components/NewsList/tpl/indexTpl.tpl';
import item0 from '@/components/NewsList/tpl/tpl0.tpl';
import item1 from '@/components/NewsList/tpl/tpl1.tpl';
import item2 from '@/components/NewsList/tpl/tpl2.tpl';
import item3 from '@/components/NewsList/tpl/tpl3.tpl';
import { findItemNode, tplReplace } from '@/libs/utils';
import { IComponentBase } from '@/typings/utilsType';

interface IComponent extends IComponentBase {
  listWrapper: (top: number) => string;
  tpl: (oList: HTMLElement, data: any, pageNum: number) => void;
  imgShow: () => void;
  bindEvent: (oList: HTMLElement, fn: Function) => void;
  getNewsMsg: (fn: Function) => void;
}

export default <IComponent>{
  name: 'NewsList',
  listWrapper: (top: number) => tplReplace(listWrapper, { top }),

  tpl: (oList: HTMLElement, data: any, pageNum: number) => {
    console.log(data);
    let tpl: Function;
    let newsListTpl: string = '';
    data &&
      data.forEach((item: any, index: number) => {
        if (item.thumbnail_pic_s03) tpl = item3;
        else if (item.thumbnail_pic_s02 && !item.thumbnail_pic_s03) tpl = item2;
        else if (
          item.thumbnail_pic_s &&
          !item.thumbnail_pic_s02 &&
          !item.thumbnail_pic_s03
        )
          tpl = item1;
        else tpl = item0;

        newsListTpl += tplReplace(tpl, {
          title: item.title,
          pageNum,
          index,
          author: item.author_name,
          date: item.date,
          uniquekey: item.uniquekey,
          thumbnail_pic_s: item.thumbnail_pic_s,
          thumbnail_pic_s02: item.thumbnail_pic_s02,
          thumbnail_pic_s03: item.thumbnail_pic_s03,
        });
      });

    oList.innerHTML += newsListTpl;
  },

  imgShow: () => {
    const imgs: NodeListOf<HTMLImageElement> = document.querySelectorAll('img');
    imgs.forEach((img: HTMLElement) => {
      img.onload = () => {
        img.style.opacity = '1';
      };
    });
  },

  bindEvent(oList: HTMLElement, fn: Function) {
    oList.addEventListener('click', this.getNewsMsg.bind(this, fn), false);
  },

  getNewsMsg(fn: Function) {
    const tar: HTMLElement = findItemNode(arguments[1].target, 'news-item')!;
    fn({
      pageNum: +tar.dataset.page!,
      idx: +tar.dataset.index!,
    });

    location.href = `detail.html?path=${location.pathname}`;
  },
};
