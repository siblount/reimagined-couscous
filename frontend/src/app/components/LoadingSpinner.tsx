// app/components/LoadingSpinner.tsx
export default function LoadingSpinner() {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-orange-50">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-orange-500"></div>
        </div>
    );
}