import { useRouter } from 'next/router';

export default function PlaceFormSubmit() {
  const router = useRouter();
  const { isSubmitting } = router;

  return (
    <button disabled={isSubmitting}>
      {isSubmitting ? 'Submitting...' : 'Add place'}
    </button>
  );
}
