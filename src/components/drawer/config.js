export default {
    defaultVariant: 'primary',
    defaultSize: 'sm',
    fixed: {
        backdrop: 'bg-gray-700 bg-opacity-50',
        panel: 'w-screen flex flex-col bg-white shadow-xl',
        header: 'px-5 py-4',
        title: 'text-lg font-semibold text-white',
        description: 'text-sm',
        descriptionWrapper: 'mt-1',
        btnClose: '',
        body: 'p-4 relative flex-1 overflow-y-auto',
        footer: 'px-5 py-4 flex items-center justify-end space-x-3',
    },
    variants: {
        primary: {
            backdrop: '',
            panel: '',
            header: 'bg-blue-700',
            title: 'text-blue-50',
            description: 'text-blue-300',
            descriptionWrapper: '',
            btnClose: 'text-blue-50',
            body: '',
            footer: '',
        },
        secondary: {
            backdrop: '',
            panel: '',
            header: 'bg-gray-100 border-b border-gray-200',
            title: 'text-gray-700',
            description: 'text-gray-600',
            descriptionWrapper: '',
            btnClose: 'text-gray-700',
            body: '',
            footer: 'bg-gray-100 border-t border-gray-200',
        },
    },
    sizes: {
        sm: {
            panel: 'max-w-md',
        },
        md: {
            panel: 'max-w-xl',
        },
        lg: {
            panel: 'max-w-3xl',
        },
        full: {
            panel: '',
        },
    },
};
