import PropTypes from 'prop-types';

import useAnimatedUnmount from '../../hooks/useAnimatedUnmount';
import Button from '../Button';
import ReactPortal from '../ReactPortal';
import { Overlay, Container, Footer } from './styles';

const Modal = ({
  title,
  visible,
  children,
  cancelLabel = 'Cancelar',
  confirmLabel = 'Confirmar',
  onCancel,
  onConfirm,
  danger = false,
  isLoading = false,
}) => {
  const { shouldRender, animatedElementRef } = useAnimatedUnmount(visible);

  if (!shouldRender) {
    return null;
  }

  return (
    <ReactPortal containerId="modal-root">
      <Overlay isLeaving={!visible} ref={animatedElementRef}>
        <Container danger={danger} isLeaving={!visible}>
          <h1>{title}</h1>

          <div className="modal-body">{children}</div>

          <Footer>
            <button
              type="button"
              className="cancel-button"
              onClick={onCancel}
              disabled={isLoading}
            >
              {cancelLabel}
            </button>

            <Button
              type="button"
              danger={danger}
              onClick={onConfirm}
              isLoading={isLoading}
            >
              {confirmLabel}
            </Button>
          </Footer>
        </Container>
      </Overlay>
    </ReactPortal>
  );
};

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onConfirm: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  danger: PropTypes.bool,
  isLoading: PropTypes.bool,
  visible: PropTypes.bool.isRequired,
  cancelLabel: PropTypes.string,
  confirmLabel: PropTypes.string,
};

export default Modal;
