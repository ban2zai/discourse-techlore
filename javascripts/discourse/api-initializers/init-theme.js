import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("0.8", (api) => {
  api.decorateWidget('post-notice:before', helper => {
    return helper.h('img', {
      src: 'https://discuss.techlore.tech/uploads/default/original/1X/cea9deb094d9e1404e3301c595935fbb622786dd.png',
      style: 'width: var(--topic-avatar-width);height: var(--topic-avatar-width);margin-right: var(--topic-body-width-padding);',
      height: 45,
      width: 45
    });
  });
});