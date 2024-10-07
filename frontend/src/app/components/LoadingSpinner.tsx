// app/components/LoadingSpinner.tsx
export default function LoadingSpinner() {
    return (
        <div className="flex justify-center items-center h-full">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-orange-500"></div>
        </div>
      );
}