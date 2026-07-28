import { notifications as mantineNotifications } from "@mantine/notifications";

export type NotifyOptions = {
  title?: string;
  message: string;
  autoClose?: number | boolean;
};

/**
 * 唯一通知入口。不做 toast / banner / message 三套并行命名。
 */
export const notify = {
  success(opts: NotifyOptions) {
    mantineNotifications.show({
      color: "green",
      title: opts.title ?? "成功",
      message: opts.message,
      autoClose: opts.autoClose ?? 3000,
    });
  },
  error(opts: NotifyOptions) {
    mantineNotifications.show({
      color: "red",
      title: opts.title ?? "出错了",
      message: opts.message,
      autoClose: opts.autoClose ?? 5000,
    });
  },
  info(opts: NotifyOptions) {
    mantineNotifications.show({
      color: "brand",
      title: opts.title ?? "提示",
      message: opts.message,
      autoClose: opts.autoClose ?? 3000,
    });
  },
  warning(opts: NotifyOptions) {
    mantineNotifications.show({
      color: "yellow",
      title: opts.title ?? "注意",
      message: opts.message,
      autoClose: opts.autoClose ?? 4000,
    });
  },
  hide(id: string) {
    mantineNotifications.hide(id);
  },
  clean() {
    mantineNotifications.clean();
  },
};
