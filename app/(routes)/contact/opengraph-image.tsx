import { ImageResponse } from '@vercel/og';
import { seo } from '@/data/seo';
import { pageConfigs, colors, OG_IMAGE_WIDTH, OG_IMAGE_HEIGHT, getDomainName, getVoxelBaseImage } from '@/lib/utils/og-image-utils';

export const runtime = 'edge';
export const alt = seo.pages.contact.title;
export const size = {
    width: OG_IMAGE_WIDTH,
    height: OG_IMAGE_HEIGHT,
};
export const contentType = 'image/png';

export default async function Image() {
    const config = pageConfigs.contact;
    const voxelImage = await getVoxelBaseImage();

    return new ImageResponse(
        (
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    background: colors.backgroundGradientStart,
                    position: 'relative',
                }}
            >
                {voxelImage && (
                    <img
                        src={voxelImage as any}
                        alt="Background"
                        width="1200"
                        height="630"
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            opacity: 0.6,
                        }}
                    />
                )}

                <div
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: voxelImage
                            ? config.gradient.replace('0.15)', '0.4)')
                            : config.gradient,
                    }}
                />

                <div
                    style={{
                        position: 'absolute',
                        top: 40,
                        right: 40,
                        width: 150,
                        height: 150,
                        border: '2px solid rgba(236, 72, 153, 0.3)',
                        borderRadius: 20,
                        opacity: 0.5,
                    }}
                />

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '80px',
                        width: '100%',
                        height: '100%',
                        position: 'relative',
                        zIndex: 10,
                    }}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                padding: '12px 24px',
                                background: 'rgba(236, 72, 153, 0.2)',
                                border: '2px solid rgba(236, 72, 153, 0.3)',
                                borderRadius: 12,
                                fontSize: 22,
                                fontWeight: 500,
                                color: '#ec4899',
                                marginBottom: 40,
                            }}
                        >
                            {config.badge}
                        </div>

                        <div
                            style={{
                                fontSize: 72,
                                fontWeight: 700,
                                color: colors.text,
                                lineHeight: 1.1,
                                marginBottom: 24,
                                maxWidth: '900px',
                            }}
                        >
                            {config.title}
                        </div>

                        <div
                            style={{
                                fontSize: 36,
                                fontWeight: 400,
                                color: colors.textMuted,
                                lineHeight: 1.3,
                                maxWidth: '800px',
                            }}
                        >
                            {config.subtitle}
                        </div>
                    </div>

                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            width: '100%',
                        }}
                    >
                        <div
                            style={{
                                fontSize: 28,
                                fontWeight: 600,
                                color: colors.text,
                            }}
                        >
                            {seo.author.name}
                        </div>
                        <div
                            style={{
                                fontSize: 24,
                                fontWeight: 400,
                                color: colors.textMuted,
                            }}
                        >
                            {getDomainName(seo.siteUrl)}
                        </div>
                    </div>
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
