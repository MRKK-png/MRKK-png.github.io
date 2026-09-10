'use client';

export function ArchiveReturn() {
  const returnToRoom = () => {
    if (window.history.length > 1) {
      window.history.back();
      return;
    }
    window.location.assign('/');
  };

  return (
    <button className="project-return" type="button" onClick={returnToRoom}>
      <span aria-hidden="true">←</span> RETURN TO ARCHIVE ROOM
    </button>
  );
}
