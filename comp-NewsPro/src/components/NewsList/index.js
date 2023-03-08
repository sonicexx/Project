import { getItemNode, getKeys, tplReplace } from '../../libs/utils';
import './index.scss';

// 导入 四种 模板：没有图片的、1张、2张、3张的
import tpl0 from './tpl/tpl0.tpl';
import tpl1 from './tpl/tpl1.tpl';
import tpl2 from './tpl/tpl2.tpl';
import tpl3 from './tpl/tpl3.tpl';
//pageNum、index、title、author、date、uniquekey、url、thumbnial_pic_s、thumbnial_pic_s02、thumbnial_pic_s03

// 导入 列表框 模板
import wrapper from './tpl/wrapper.tpl'; // top

export default {
  name: 'NewsList',

  wrapperTpl(top) {
    return tplReplace(wrapper, { top });
  },

  tpl(options) {
    const { data, pageNum } = options;
    let list = '';
    let tpl = '';
    const temp = getKeys(data, 'thumbnail_pic');

    data.forEach((item, index) => {
      switch (temp[index].count) {
        case 0:
          tpl = tpl0;
          break;
        case 1:
          tpl = tpl1;
          break;
        case 2:
          tpl = tpl2;
          break;
        case 3:
          tpl = tpl3;
          break;
        default:
          break;
      }
      list += tplReplace(tpl, {
        pageNum,
        index,
        uniquekey: item.uniquekey,
        url: item.url,
        author: item.author_name,
        date: item.date,
        thumbnail_pic_s: item.thumbnail_pic_s,
        thumbnail_pic_s02: item.thumbnail_pic_s02,
        thumbnail_pic_s03: item.thumbnail_pic_s03,
        category: item.category,
        title: item.title,
      });
    });

    return list;
  },

  imgShow() {
    const oImgs = document.querySelectorAll('img');
    [...oImgs].forEach(item => {
      item.onload = () => {
        item.style.opacity = 1;
      };
    });
  },

  bindEvent(oList, setCurrentNews) {
    oList.addEventListener(
      'click',
      this._goToDetail.bind(this, setCurrentNews),
      false
    );
  },

  _goToDetail(setCurrentNews) {
    const tar = getItemNode(arguments[1].target);
    const options = {
      idx: tar.dataset.index,
      pageNum: tar.dataset.page,
    };

    setCurrentNews(options);

    window.location.href = `detail.html?path=${location.pathname}`;
  },
};
