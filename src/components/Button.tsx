import classNames from 'classnames';

interface ButtonProps {
  classnames?: string;
  content: string;
}

export default function Button(props: ButtonProps) {
  const { classnames, content } = props;

  return <button className={classNames('btn', classnames)}>{content}</button>;
}
